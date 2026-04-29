import { useMemo, useState } from 'react';
import GameCard from '../components/GameCard';
import '../assets/homepage.css';
import { games } from '../data/games';
import homepageBanner from '../assets/homepage-banner.jpeg';

interface HomePageProps {
  onSelectGame: (slug: string) => void;
}

const jokiGames = [
  { id: 'jg-1', title: 'Joki Rank Mobile Legends', category: 'Push Rank', accent: 'accent-cyan' },
  { id: 'jg-2', title: 'Joki Bintang Honor of Kings', category: 'Rank Service', accent: 'accent-gold' },
  { id: 'jg-3', title: 'Joki Classic ke Mythic', category: 'Tier Boost', accent: 'accent-red' },
  { id: 'jg-4', title: 'Joki Genshin Daily Quest', category: 'Daily Mission', accent: 'accent-violet' },
  { id: 'jg-5', title: 'Joki PUBG Push Tier', category: 'Survival Rank', accent: 'accent-green' },
  { id: 'jg-6', title: 'Joki CODM Ranked Match', category: 'Ranked Service', accent: 'accent-indigo' },
];

const HomePage = ({ onSelectGame }: HomePageProps) => {
  const [activeSection, setActiveSection] = useState<'popular' | 'joki'>('popular');

  const activeItems = useMemo(
    () => (activeSection === 'popular' ? games : jokiGames),
    [activeSection],
  );

  return (
    <section className="home-section">
      <div className="home-banner-shell">
        <div className="home-banner">
          <img
            src={homepageBanner}
            alt="Banner promo top up Javes Store"
            className="home-banner-image"
          />
        </div>
      </div>

      <div className="home-container">
        <div className="section-header">
          <div>
            <p className="section-kicker">Pilihan Utama</p>
            <div className="section-title-row">
              <div className="section-inline-tabs" role="tablist" aria-label="Pilih kategori">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeSection === 'popular'}
                  className={`section-inline-tab ${activeSection === 'popular' ? 'is-active' : ''}`}
                  onClick={() => setActiveSection('popular')}
                >
                  Game Populer
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeSection === 'joki'}
                  className={`section-inline-tab ${activeSection === 'joki' ? 'is-active' : ''}`}
                  onClick={() => setActiveSection('joki')}
                >
                  Joki Game
                </button>
                <span
                  className={`section-inline-indicator ${activeSection === 'joki' ? 'is-joki' : 'is-popular'}`}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section-divider"></div>

        <div className="game-grid">
          {activeItems.map((item) => (
            <GameCard
              key={item.id}
              title={item.title}
              accent={item.accent}
              imageSrc={'image' in item ? item.image : undefined}
              imageFit={'imageFit' in item ? item.imageFit : undefined}
              imagePosition={'imagePosition' in item ? item.imagePosition : undefined}
              imageScale={'imageScale' in item ? item.imageScale : undefined}
              onClick={'slug' in item ? () => onSelectGame(item.slug) : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
