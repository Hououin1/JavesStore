import { useEffect, useMemo, useState } from 'react';
import { Copy, Download, QrCode, ShieldCheck } from 'lucide-react';
import '../assets/payment-page.css';
import type { PendingPayment } from '../types/payment';

interface PaymentPageProps {
  payment: PendingPayment;
}

const formatPrice = (value: number) => `Rp ${value.toLocaleString('id-ID')}`;

const padTime = (value: number) => String(value).padStart(2, '0');

const PaymentPage = ({ payment }: PaymentPageProps) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = new Date(payment.expiresAt).getTime() - Date.now();
    return Math.max(diff, 0);
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      const diff = new Date(payment.expiresAt).getTime() - Date.now();
      setTimeLeft(Math.max(diff, 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [payment.expiresAt]);

  const countdown = useMemo(() => {
    const totalSeconds = Math.floor(timeLeft / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hours: padTime(hours),
      minutes: padTime(minutes),
      seconds: padTime(seconds),
    };
  }, [timeLeft]);

  const orderDate = useMemo(
    () =>
      new Intl.DateTimeFormat('id-ID', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).format(new Date(payment.createdAt)),
    [payment.createdAt],
  );

  const uniqueCode = payment.totalPrice - payment.packagePrice - payment.paymentFee;

  return (
    <section className="payment-section">
      <div className="payment-container">
        <div className="payment-layout">
          <aside className="payment-sidebar-card">
            <div className="payment-status-copy">
              <h1>Belum Bayar</h1>
              <p>Selesaikan pembayaran sebelum waktu habis.</p>
            </div>

            <div className="payment-countdown">
              <div className="payment-countdown-box">
                <strong>{countdown.hours}</strong>
                <span>Jam</span>
              </div>
              <div className="payment-countdown-box">
                <strong>{countdown.minutes}</strong>
                <span>Menit</span>
              </div>
              <div className="payment-countdown-box">
                <strong>{countdown.seconds}</strong>
                <span>Detik</span>
              </div>
            </div>

            <p className="payment-sidebar-note">Agar pesanan kamu tidak expired.</p>

            <div className="payment-qr-card">
              <div className="payment-qr-frame" aria-label="Placeholder QR pembayaran">
                <div className="payment-qr-grid">
                  {Array.from({ length: 81 }).map((_, index) => (
                    <span key={index} className={index % 2 === 0 ? 'is-filled' : ''} />
                  ))}
                </div>
                <div className="payment-qr-center">
                  <QrCode size={38} />
                  <span>QRIS</span>
                </div>
              </div>
            </div>

            <button type="button" className="payment-download-button">
              <Download size={18} />
              <span>Unduh kode QR</span>
            </button>
          </aside>

          <div className="payment-main">
            <section className="payment-meta-card">
              <div>
                <span>Tanggal Pembelian</span>
                <strong>{orderDate}</strong>
              </div>
              <div>
                <span>Nomor Pesanan</span>
                <strong>{payment.orderId}</strong>
              </div>
              <div>
                <span>Metode Pembayaran</span>
                <strong>{payment.paymentLabel}</strong>
              </div>
              <div>
                <span>Status</span>
                <strong>Belum Bayar</strong>
              </div>
            </section>

            <section className="payment-detail-card">
              <div className="payment-game-header">
                <div className="payment-game-badge">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h2>{payment.gameTitle}</h2>
                  <p>Pesanan top up siap dibayar.</p>
                </div>
              </div>

              <div className="payment-detail-body">
                <h3>Detail</h3>

                <div className="payment-detail-grid">
                  <span>Item</span>
                  <strong>{payment.packageName}</strong>

                  <span>ID User</span>
                  <strong>{payment.playerId}</strong>

                  {payment.zoneId ? (
                    <>
                      <span>ID Zone</span>
                      <strong>{payment.zoneId}</strong>
                    </>
                  ) : null}

                  <span>Nomor Handphone</span>
                  <strong>{payment.whatsAppNumber}</strong>

                  <span>Harga</span>
                  <strong>{formatPrice(payment.packagePrice)}</strong>

                  <span>Fee</span>
                  <strong>{formatPrice(payment.paymentFee)}</strong>

                  <span>Kode Unik</span>
                  <strong>{formatPrice(uniqueCode)}</strong>
                </div>
              </div>

              <div className="payment-total-bar">
                <div>
                  <span>Total Pembayaran</span>
                  <strong>{formatPrice(payment.totalPrice)}</strong>
                </div>

                <button
                  type="button"
                  className="payment-copy-button"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(String(payment.totalPrice));
                    } catch {
                      // no-op for unsupported clipboard environments
                    }
                  }}
                >
                  <Copy size={20} />
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
