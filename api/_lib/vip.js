import crypto from 'node:crypto';

const VIP_BASE_URL = 'https://vip-reseller.co.id/api/game-feature';

class ApiError extends Error {
  constructor(statusCode, message, details) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.details = details;
  }
}

const getEnv = (name) => {
  const value = process.env[name];

  if (!value) {
    throw new ApiError(500, `Missing required environment variable: ${name}`);
  }

  return value;
};

export const createSignature = () => {
  const apiId = getEnv('API_ID');
  const apiKey = getEnv('API_KEY');

  return crypto.createHash('md5').update(`${apiId}${apiKey}`).digest('hex');
};

export const getCredentials = () => ({
  key: getEnv('API_KEY'),
  sign: createSignature(),
});

export const readRequestInput = (req) => {
  const query = req.query && typeof req.query === 'object' ? req.query : {};
  let body = {};

  if (req.body && typeof req.body === 'object') {
    body = req.body;
  } else if (typeof req.body === 'string' && req.body.trim()) {
    try {
      body = JSON.parse(req.body);
    } catch {
      throw new ApiError(400, 'Request body must be valid JSON.');
    }
  }

  return { ...query, ...body };
};

export const sendJson = (res, statusCode, payload) => {
  res.status(statusCode).json(payload);
};

export const ensureMethod = (req, res, methods) => {
  if (methods.includes(req.method)) {
    return true;
  }

  res.setHeader('Allow', methods);
  sendJson(res, 405, {
    error: `Method ${req.method} not allowed.`,
  });
  return false;
};

export const callVipApi = async (payload) => {
  const credentials = getCredentials();
  const body = new URLSearchParams();

  for (const [key, value] of Object.entries({ ...credentials, ...payload })) {
    if (value !== undefined && value !== null && value !== '') {
      body.append(key, String(value));
    }
  }

  const response = await fetch(VIP_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    body,
  });

  const text = await response.text();
  let json;

  try {
    json = JSON.parse(text);
  } catch {
    throw new ApiError(502, 'VIP API returned a non-JSON response.', text);
  }

  if (!response.ok) {
    throw new ApiError(response.status, json?.message || 'VIP API request failed.', json);
  }

  if (!json?.result) {
    throw new ApiError(400, json?.message || 'VIP API rejected the request.', json);
  }

  return json;
};

export const handleRouteError = (res, error) => {
  const statusCode = error instanceof ApiError ? error.statusCode : 500;
  const message = error instanceof Error ? error.message : 'Unexpected server error.';
  const details = error instanceof ApiError ? error.details : undefined;

  sendJson(res, statusCode, {
    error: message,
    ...(details ? { details } : {}),
  });
};

export { ApiError };
