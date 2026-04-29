import { ApiError, callVipApi, ensureMethod, handleRouteError, readRequestInput, sendJson } from './_lib/vip.js';

const MOBILE_LEGENDS_NICKNAME_CODE = 'mobile-legends';

export default async function handler(req, res) {
  if (!ensureMethod(req, res, ['GET', 'POST'])) {
    return;
  }

  try {
    const { user_id: userId, zone_id: zoneId } = readRequestInput(req);

    if (!userId || !zoneId) {
      throw new ApiError(400, 'user_id and zone_id are required.');
    }

    const vipResponse = await callVipApi({
      type: 'get-nickname',
      code: MOBILE_LEGENDS_NICKNAME_CODE,
      target: userId,
      additional_target: zoneId,
    });

    sendJson(res, 200, {
      success: true,
      nickname: vipResponse.data,
      message: vipResponse.message,
    });
  } catch (error) {
    handleRouteError(res, error);
  }
}
