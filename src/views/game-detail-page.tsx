import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, BadgeHelp, ChevronDown, ChevronUp, Info, ShieldCheck, Wallet, X, Zap } from 'lucide-react';
import '../assets/game-detail.css';
import { paymentGroups } from '../data/games';
import type { GameDetail } from '../data/games';
import type { PendingPayment } from '../types/payment';

interface GameDetailPageProps {
  game: GameDetail;
  onBack: () => void;
  onStartPayment: (payment: PendingPayment) => void;
}

type NoticeState = {
  message: string;
  variant: 'info' | 'error';
};

const GameDetailPage = ({ game, onBack, onStartPayment }: GameDetailPageProps) => {
  const isMobileLegends = game.slug === 'mobile-legends';
  const [selectedPackageGroup, setSelectedPackageGroup] = useState<'diamonds' | 'weekly-pass'>('diamonds');
  const [selectedPackageId, setSelectedPackageId] = useState('');
  const [expandedPaymentId, setExpandedPaymentId] = useState('');
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] = useState('');
  const [isCheckoutDialogOpen, setIsCheckoutDialogOpen] = useState(false);
  const [playerId, setPlayerId] = useState('');
  const [serverZone, setServerZone] = useState('');
  const [whatsAppNumber, setWhatsAppNumber] = useState('');
  const [paymentNotice, setPaymentNotice] = useState<NoticeState | null>(null);
  const customerSectionRef = useRef<HTMLElement | null>(null);
  const packageSectionRef = useRef<HTMLElement | null>(null);
  const playerIdInputRef = useRef<HTMLInputElement | null>(null);
  const serverZoneInputRef = useRef<HTMLInputElement | null>(null);
  const whatsAppInputRef = useRef<HTMLInputElement | null>(null);
  const noticeTimeoutRef = useRef<number | null>(null);

  const selectedPackage = useMemo(
    () => game.packages.find((item) => item.id === selectedPackageId),
    [game.packages, selectedPackageId],
  );

  const visiblePackages = useMemo(() => {
    if (!isMobileLegends) {
      return game.packages;
    }

    return game.packages.filter((item) => item.group === selectedPackageGroup);
  }, [game.packages, isMobileLegends, selectedPackageGroup]);

  const selectedPaymentMethod = useMemo(
    () =>
      paymentGroups
        .flatMap((group) => group.methods)
        .find((method) => method.id === selectedPaymentMethodId),
    [selectedPaymentMethodId],
  );

  useEffect(() => {
    setSelectedPackageGroup('diamonds');
    setSelectedPackageId('');
    setExpandedPaymentId('');
    setSelectedPaymentMethodId('');
    setIsCheckoutDialogOpen(false);
    setPlayerId('');
    setServerZone('');
    setWhatsAppNumber('');
    setPaymentNotice(null);
  }, [game.slug]);

  useEffect(() => {
    if (!paymentNotice) {
      return;
    }

    if (noticeTimeoutRef.current) {
      window.clearTimeout(noticeTimeoutRef.current);
    }

    noticeTimeoutRef.current = window.setTimeout(() => {
      setPaymentNotice(null);
      noticeTimeoutRef.current = null;
    }, 2800);

    return () => {
      if (noticeTimeoutRef.current) {
        window.clearTimeout(noticeTimeoutRef.current);
        noticeTimeoutRef.current = null;
      }
    };
  }, [paymentNotice]);

  const basePrice = useMemo(() => {
    if (!selectedPackage) {
      return 0;
    }

    return Number(selectedPackage.price.replace(/[^\d]/g, ''));
  }, [selectedPackage]);

  const sanitizeDigits = (value: string, maxLength?: number) => {
    const digitsOnly = value.replace(/\D/g, '');
    return typeof maxLength === 'number' ? digitsOnly.slice(0, maxLength) : digitsOnly;
  };

  const formatPrice = (value: number) => `Rp ${value.toLocaleString('id-ID')}`;

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement | null>) => {
    if (!sectionRef.current) {
      return;
    }

    const headerOffset = 130;
    const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(sectionTop, 0),
      behavior: 'smooth',
    });
  };

  const scrollToInput = (inputRef: React.RefObject<HTMLInputElement | null>) => {
    if (!inputRef.current) {
      return;
    }

    const headerOffset = 118;
    const inputTop = inputRef.current.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(inputTop, 0),
      behavior: 'smooth',
    });

    window.setTimeout(() => {
      inputRef.current?.focus();
    }, 220);
  };

  const hasCustomerData = isMobileLegends
    ? Boolean(playerId.trim() && serverZone.trim() && whatsAppNumber.trim())
    : Boolean(playerId.trim() && whatsAppNumber.trim());

  const checkoutReady = Boolean(selectedPackage && selectedPaymentMethod && hasCustomerData);
  const totalPrice = selectedPaymentMethod ? basePrice + selectedPaymentMethod.fee : basePrice;

  const buildPendingPayment = (): PendingPayment | null => {
    if (!selectedPackage || !selectedPaymentMethod || !hasCustomerData) {
      return null;
    }

    const createdAt = new Date();
    const expiresAt = new Date(createdAt.getTime() + 8 * 60 * 60 * 1000);
    const randomToken = Math.random().toString(36).slice(2, 10).toUpperCase();
    const orderPrefix = game.slug.slice(0, 2).toUpperCase();

    return {
      orderId: `${orderPrefix}-${Date.now()}-${randomToken}`,
      createdAt: createdAt.toISOString(),
      expiresAt: expiresAt.toISOString(),
      gameSlug: game.slug,
      gameTitle: game.title,
      packageName: selectedPackage.name,
      packagePrice: basePrice,
      totalPrice,
      paymentBrand: selectedPaymentMethod.brand,
      paymentLabel: selectedPaymentMethod.label,
      paymentFee: selectedPaymentMethod.fee,
      playerId: playerId.trim(),
      zoneId: serverZone.trim(),
      whatsAppNumber: whatsAppNumber.trim(),
      packageGroup: selectedPackage.group,
    };
  };

  const showMissingPackageNotice = () => {
    scrollToSection(packageSectionRef);
    setPaymentNotice({
      message: 'Silahkan pilih nominal top up terlebih dahulu',
      variant: 'info',
    });
  };

  const showMissingCustomerNotice = () => {
    if (!playerId.trim()) {
      scrollToInput(playerIdInputRef);
    } else if (isMobileLegends && !serverZone.trim()) {
      scrollToInput(serverZoneInputRef);
    } else {
      scrollToInput(whatsAppInputRef);
    }

    setPaymentNotice({
      message: 'Silahkan isi data game terlebih dahulu',
      variant: 'error',
    });
  };

  return (
    <section className="detail-section">
      <div className="detail-container">
        <button type="button" className="detail-back-button" onClick={onBack}>
          <ArrowLeft size={18} />
          <span>Kembali ke daftar game</span>
        </button>

        <div className="detail-layout">
          <aside className="detail-sidebar">
            <div className={`detail-hero-card ${game.accent}`}>
              <div className="detail-hero-art">
                <div className="detail-hero-badge">{game.category}</div>
                {game.image ? (
                  <img
                    src={game.image}
                    alt={game.title}
                    className={`detail-hero-image detail-hero-image-full ${game.imageFit === 'contain' ? 'is-contain' : 'is-cover'}`}
                    style={{
                      objectPosition: game.imagePosition ?? 'center',
                      transform: `scale(${Number.parseFloat(game.imageScale ?? '100%') / 100})`,
                    }}
                  />
                ) : null}
                <div className="detail-hero-pattern" />
                <div className="detail-hero-copy">
                  <p className="detail-hero-label">{game.heroLabel}</p>
                  <h1>{game.title}</h1>
                </div>
              </div>

              <div className="detail-feature-grid">
                <div><ShieldCheck size={18} /> Jaminan layanan</div>
                <div><BadgeHelp size={18} /> Bantuan responsif</div>
                <div><Wallet size={18} /> Pembayaran aman</div>
                <div><Zap size={18} /> Proses instan</div>
              </div>

              <div className="detail-sidebar-copy">
                <h2>Top up {game.title} cepat dan aman</h2>
                <p>{game.description}</p>
              </div>

              <div className="detail-benefit-list">
                {game.benefits.map((benefit) => (
                  <span key={benefit}>{benefit}</span>
                ))}
              </div>
            </div>
          </aside>

          <div className="detail-main">
            <section ref={customerSectionRef} className="detail-panel">
              <div className="detail-panel-header">
                <span className="detail-step">1</span>
                <div>
                  <h2>Informasi Pelanggan</h2>
                  <p>Masukkan data akun untuk melanjutkan top up.</p>
                </div>
              </div>

              <div className="detail-form-grid">
                <label>
                  <span>User ID</span>
                  <input
                    ref={playerIdInputRef}
                    type="text"
                    inputMode={isMobileLegends ? 'numeric' : 'text'}
                    placeholder="Masukkan user ID"
                    value={playerId}
                    onChange={(event) =>
                      setPlayerId(
                        isMobileLegends
                          ? sanitizeDigits(event.target.value)
                          : event.target.value,
                      )
                    }
                  />
                </label>
                {isMobileLegends ? (
                  <label>
                    <span>Server / Zone</span>
                    <input
                      ref={serverZoneInputRef}
                      type="text"
                      inputMode="numeric"
                      maxLength={8}
                      placeholder="Masukkan server ID"
                      value={serverZone}
                      onChange={(event) =>
                        setServerZone(sanitizeDigits(event.target.value, 8))
                      }
                    />
                  </label>
                ) : null}
                <label className="detail-form-full">
                  <span>Nomor WhatsApp</span>
                  <input
                    ref={whatsAppInputRef}
                    type="text"
                    placeholder="08xxxxxxxxxx"
                    inputMode="numeric"
                    maxLength={13}
                    value={whatsAppNumber}
                    onChange={(event) => setWhatsAppNumber(sanitizeDigits(event.target.value, 13))}
                  />
                </label>
              </div>
            </section>

            <section ref={packageSectionRef} className="detail-panel">
              <div className="detail-panel-header">
                <span className="detail-step">2</span>
                <div>
                  <h2>Pilih Nominal Top Up</h2>
                  <p>
                    {isMobileLegends
                      ? 'Pilih kategori dulu, lalu tentukan nominal yang ingin kamu beli.'
                      : 'Nominal bisa kamu ganti lagi nanti dari data produk asli.'}
                  </p>
                </div>
              </div>

              {isMobileLegends ? (
                <div className="detail-package-groups" role="tablist" aria-label="Kategori top up Mobile Legends">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={selectedPackageGroup === 'diamonds'}
                    className={`detail-package-group-tab ${selectedPackageGroup === 'diamonds' ? 'is-active' : ''}`}
                    onClick={() => {
                      setSelectedPackageGroup('diamonds');
                      setSelectedPackageId('');
                      setSelectedPaymentMethodId('');
                    }}
                  >
                    <span className="detail-package-group-icon" aria-hidden="true">💎</span>
                    <span>Diamonds</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={selectedPackageGroup === 'weekly-pass'}
                    className={`detail-package-group-tab ${selectedPackageGroup === 'weekly-pass' ? 'is-active' : ''}`}
                    onClick={() => {
                      setSelectedPackageGroup('weekly-pass');
                      setSelectedPackageId('');
                      setSelectedPaymentMethodId('');
                    }}
                  >
                    <span className="detail-package-group-icon" aria-hidden="true">🎟️</span>
                    <span>Weekly Pass</span>
                  </button>
                </div>
              ) : null}

              <div className="detail-package-grid">
                {visiblePackages.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`detail-package-card ${selectedPackageId === item.id ? 'is-selected' : ''}`}
                    onClick={() => {
                      const isSamePackage = selectedPackageId === item.id;
                      setSelectedPackageId(isSamePackage ? '' : item.id);
                      setSelectedPaymentMethodId('');
                    }}
                  >
                    <div className="detail-package-top">
                      <p>{item.name}</p>
                      {item.discount ? <span>{item.discount}</span> : null}
                    </div>
                    {item.bonus ? <small>{item.bonus}</small> : null}
                    <strong>{item.price}</strong>
                  </button>
                ))}
              </div>
            </section>

            <section className="detail-panel detail-payment-panel">
              <div className="detail-panel-header">
                <span className="detail-step">3</span>
                <div>
                  <h2>Pilih Pembayaran</h2>
                  <p>Pilih metode pembayaran yang paling nyaman untuk checkout top up kamu.</p>
                </div>
              </div>

              <div className="detail-payment-groups">
                {paymentGroups.map((group) => {
                  const isExpanded = expandedPaymentId === group.id;
                  const togglePaymentGroup = () => {
                    if (!selectedPackage) {
                      showMissingPackageNotice();
                      return;
                    }

                    setExpandedPaymentId((current) => (current === group.id ? '' : group.id));
                  };

                  const trigger = (
                    <button
                      type="button"
                      className={`detail-payment-card-body ${isExpanded ? 'is-expanded' : ''}`}
                      onClick={togglePaymentGroup}
                    >
                      <div className="detail-payment-methods">
                        {group.methods.map((method) => (
                          <span
                            key={method.id}
                            className={`detail-payment-badge detail-payment-badge-${group.id}`}
                          >
                            {method.brand}
                          </span>
                        ))}
                      </div>

                      <span className="detail-payment-chevron" aria-hidden="true">
                        {isExpanded ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
                      </span>
                    </button>
                  );

                  return (
                    <div
                      key={group.id}
                      className={`detail-payment-card ${isExpanded ? 'is-expanded' : ''}`}
                    >
                      <div className="detail-payment-card-header">
                        <h3>{group.title}</h3>
                      </div>

                      {!isExpanded ? trigger : null}

                      {isExpanded ? (
                        <div className="detail-payment-dropdown">
                          <div className="detail-payment-options">
                            {group.methods.map((method) => {
                              const totalPrice = basePrice + method.fee;

                              return (
                                <button
                                  key={method.id}
                                  type="button"
                                  className={`detail-payment-option ${selectedPaymentMethodId === method.id ? 'is-selected' : ''}`}
                                  disabled={!selectedPackage}
                                  onClick={() => {
                                    if (!hasCustomerData) {
                                      showMissingCustomerNotice();
                                      return;
                                    }

                                    setSelectedPaymentMethodId((current) =>
                                      current === method.id ? '' : method.id,
                                    );
                                  }}
                                >
                                  <span className={`detail-payment-option-brand detail-payment-badge-${group.id}`}>
                                    {method.brand}
                                  </span>
                                  <strong>{selectedPackage ? formatPrice(totalPrice) : 'Pilih item terlebih dahulu'}</strong>
                                  <small>{method.label}</small>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ) : null}

                      {isExpanded ? trigger : null}
                    </div>
                  );
                })}
              </div>

              <p className="detail-payment-note">
                {selectedPackage ? (
                  <>
                    Harga pembayaran otomatis mengikuti nominal <strong>{selectedPackage.name}</strong> dengan dasar
                    harga <strong>{formatPrice(basePrice)}</strong>.
                  </>
                ) : (
                  <>Pilih nominal top up dulu supaya harga di metode pembayaran muncul sesuai produk yang dipilih.</>
                )}
              </p>

              {checkoutReady ? (
                <div className="detail-checkout-bar">
                  <div className="detail-checkout-summary">
                    <span className="detail-checkout-icon" aria-hidden="true">
                      {selectedPackage?.group === 'weekly-pass' ? 'WP' : 'DM'}
                    </span>
                    <div className="detail-checkout-copy">
                      <strong>{selectedPackage?.name}</strong>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="detail-checkout-button"
                    onClick={() => setIsCheckoutDialogOpen(true)}
                  >
                    <span>Konfirmasi Pembelian</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              ) : null}
            </section>
          </div>
        </div>

        {paymentNotice ? (
          <div className={`detail-toast is-${paymentNotice.variant}`} role="status" aria-live="polite">
            <span className="detail-toast-icon">
              <Info size={18} />
            </span>
            <p>{paymentNotice.message}</p>
            <button
              type="button"
              className="detail-toast-close"
              aria-label="Tutup notifikasi"
              onClick={() => setPaymentNotice(null)}
            >
              <X size={18} />
            </button>
            <span className="detail-toast-progress" aria-hidden="true" />
          </div>
        ) : null}

        {isCheckoutDialogOpen && checkoutReady ? (
          <div className="detail-dialog-backdrop" role="presentation" onClick={() => setIsCheckoutDialogOpen(false)}>
            <div
              className="detail-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="checkout-dialog-title"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="detail-dialog-header">
                <div>
                  <h2 id="checkout-dialog-title">Detail Pesanan</h2>
                  <p>Jika data pesanan kamu sudah benar, klik beli sekarang.</p>
                </div>
                <button
                  type="button"
                  className="detail-dialog-close"
                  aria-label="Tutup dialog"
                  onClick={() => setIsCheckoutDialogOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="detail-dialog-section">
                <h3>Data Player</h3>
                <div className="detail-dialog-grid">
                  <span>User ID</span>
                  <strong>{playerId}</strong>

                  {isMobileLegends ? (
                    <>
                      <span>Zone ID</span>
                      <strong>{serverZone}</strong>
                    </>
                  ) : null}

                  <span>Nomor Handphone</span>
                  <strong>{whatsAppNumber}</strong>
                </div>
              </div>

              <div className="detail-dialog-section">
                <h3>Ringkasan Pembelian</h3>
                <div className="detail-dialog-grid">
                  <span>Item</span>
                  <strong>{selectedPackage?.name}</strong>

                  <span>Harga</span>
                  <strong>{formatPrice(basePrice)}</strong>

                  <span>Fee</span>
                  <strong>{formatPrice(selectedPaymentMethod?.fee ?? 0)}</strong>

                  <span>Sistem Pembayaran</span>
                  <strong>{selectedPaymentMethod?.label}</strong>

                  <span>Total Pembayaran</span>
                  <strong>{formatPrice(totalPrice)}</strong>
                </div>
              </div>

              <div className="detail-dialog-actions">
                <button
                  type="button"
                  className="detail-dialog-cancel"
                  onClick={() => setIsCheckoutDialogOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="detail-dialog-confirm"
                  onClick={() => {
                    const payment = buildPendingPayment();

                    if (!payment) {
                      return;
                    }

                    setIsCheckoutDialogOpen(false);
                    onStartPayment(payment);
                  }}
                >
                  <span>Beli Sekarang</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default GameDetailPage;
