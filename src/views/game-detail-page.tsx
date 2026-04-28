import { useMemo, useState } from 'react';
import { ArrowLeft, BadgeHelp, ChevronDown, ChevronUp, ShieldCheck, Wallet, Zap } from 'lucide-react';
import '../assets/game-detail.css';
import { paymentGroups } from '../data/games';
import type { GameDetail } from '../data/games';

interface GameDetailPageProps {
  game: GameDetail;
  onBack: () => void;
}

const GameDetailPage = ({ game, onBack }: GameDetailPageProps) => {
  const [selectedPackageId, setSelectedPackageId] = useState(game.packages[0]?.id ?? '');
  const [expandedPaymentId, setExpandedPaymentId] = useState(paymentGroups[1]?.id ?? paymentGroups[0]?.id ?? '');
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] = useState('');

  const selectedPackage = useMemo(
    () => game.packages.find((item) => item.id === selectedPackageId) ?? game.packages[0],
    [game.packages, selectedPackageId],
  );

  const basePrice = useMemo(() => {
    if (!selectedPackage) {
      return 0;
    }

    return Number(selectedPackage.price.replace(/[^\d]/g, ''));
  }, [selectedPackage]);

  const formatPrice = (value: number) => `Rp ${value.toLocaleString('id-ID')}`;

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
            <section className="detail-panel">
              <div className="detail-panel-header">
                <span className="detail-step">1</span>
                <div>
                  <h2>Informasi Pelanggan</h2>
                  <p>Masukkan data akun untuk melanjutkan top up.</p>
                </div>
              </div>

              <div className="detail-form-grid">
                <label>
                  <span>Player ID</span>
                  <input type="text" placeholder="Masukkan user ID" />
                </label>
                <label>
                  <span>Server / Zone</span>
                  <input type="text" placeholder="Masukkan server ID" />
                </label>
                <label className="detail-form-full">
                  <span>Nomor WhatsApp</span>
                  <input type="text" placeholder="08xxxxxxxxxx" />
                </label>
              </div>
            </section>

            <section className="detail-panel">
              <div className="detail-panel-header">
                <span className="detail-step">2</span>
                <div>
                  <h2>Pilih Nominal Top Up</h2>
                  <p>Nominal bisa kamu ganti lagi nanti dari data produk asli.</p>
                </div>
              </div>

              <div className="detail-package-grid">
                {game.packages.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`detail-package-card ${selectedPackageId === item.id ? 'is-selected' : ''}`}
                    onClick={() => setSelectedPackageId(item.id)}
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
                  const togglePaymentGroup = () =>
                    setExpandedPaymentId((current) => (current === group.id ? '' : group.id));

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
                                  onClick={() => setSelectedPaymentMethodId(method.id)}
                                >
                                  <span className={`detail-payment-option-brand detail-payment-badge-${group.id}`}>
                                    {method.brand}
                                  </span>
                                  <strong>{formatPrice(totalPrice)}</strong>
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
                Harga pembayaran otomatis mengikuti nominal <strong>{selectedPackage?.name ?? 'yang dipilih'}</strong> dengan dasar
                harga <strong>{selectedPackage ? formatPrice(basePrice) : '-'}</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDetailPage;
