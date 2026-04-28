import GameCard from '../components/GameCard';
import '../assets/homepage.css';
import { games } from '../data/games';

interface HomePageProps {
  onSelectGame: (slug: string) => void;
}

const HomePage = ({ onSelectGame }: HomePageProps) => {

  return (
    <section className="home-section">
      <div className="home-container">
        <div className="section-header">
          <div>
            <p className="section-kicker">Pilihan Utama</p>
            <h2 className="section-title">Game Populer</h2>
          </div>
        </div>
        <div className="section-divider"></div>

        <div className="game-grid">
          {games.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              category={game.category}
              accent={game.accent}
              onClick={() => onSelectGame(game.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
