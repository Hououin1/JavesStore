import "../assets/GameCard.css";

interface GameCardProps {
  title: string;
  category: string;
  accent: string;
  onClick?: () => void;
}

const GameCard = ({ title, category, accent, onClick }: GameCardProps) => {
  return (
    <article className="card-item">
      <button type="button" className="card-button" onClick={onClick}>
        <div className={`card-image-wrapper ${accent}`}>
          <div className="card-badge">Artwork</div>
          <div className="card-pattern"></div>
          <div className="card-overlay">
            <span className="card-category">{category}</span>
            <h3 className="card-title">{title}</h3>
          </div>
        </div>
      </button>
    </article>
  );
};

export default GameCard;
