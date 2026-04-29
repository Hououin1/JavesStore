import { ApiError, callVipApi, ensureMethod, handleRouteError, readRequestInput, sendJson } from './_lib/vip.js';

export default async function handler(req, res) {
  if (!ensureMethod(req, res, ['POST'])) {
    return;
  }

  try {
    const {
      service,
      user_id: userId,
      zone_id: zoneId,
      additional_data: additionalData,
      post_additional_data: postAdditionalData,
    } = readRequestInput(req);

    if (!service || !userId || !zoneId) {
      throw new ApiError(400, 'service, user_id, and zone_id are required.');
    }

    const vipResponse = await callVipApi({
      type: 'order',
      service,
      data_no: userId,
      data_zone: zoneId,
      additional_data: additionalData,
      post_additional_data: postAdditionalData,
    });

    sendJson(res, 200, {
      success: true,
      trxid: vipResponse.data?.trxid || null,
      order: vipResponse.data,
      message: vipResponse.message,
    });
  } catch (error) {
    handleRouteError(res, error);
  }
}
