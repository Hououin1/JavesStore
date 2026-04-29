import { ApiError, callVipApi, ensureMethod, handleRouteError, sendJson } from './_lib/vip.js';

export default async function handler(req, res) {
  if (!ensureMethod(req, res, ['GET'])) {
    return;
  }

  try {
    const filterStatus = typeof req.query?.status === 'string' ? req.query.status : 'available';

    const vipResponse = await callVipApi({
      type: 'services',
      filter_game: 'Mobile Legends',
      filter_status: filterStatus,
    });

    const services = Array.isArray(vipResponse.data) ? vipResponse.data : [];
    const mobileLegendsServices = services.filter((item) =>
      String(item.game || '').toLowerCase().includes('mobile legends'),
    );

    if (!mobileLegendsServices.length) {
      throw new ApiError(404, 'No Mobile Legends services were returned by VIP API.');
    }

    sendJson(res, 200, {
      success: true,
      count: mobileLegendsServices.length,
      services: mobileLegendsServices.map((item) => ({
        code: item.code,
        game: item.game,
        name: item.name,
        price: item.price,
        description: item.description,
        server: item.server,
        status: item.status,
      })),
      message: vipResponse.message,
    });
  } catch (error) {
    handleRouteError(res, error);
  }
}
