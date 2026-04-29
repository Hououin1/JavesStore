export interface PendingPayment {
  orderId: string;
  createdAt: string;
  expiresAt: string;
  gameSlug: string;
  gameTitle: string;
  packageName: string;
  packagePrice: number;
  totalPrice: number;
  paymentBrand: string;
  paymentLabel: string;
  paymentFee: number;
  playerId: string;
  zoneId: string;
  whatsAppNumber: string;
  packageGroup?: string;
}
