import "../assets/GameCard.css";

interface GameCardProps {
  title: string;
  accent: string;
  onClick?: () => void;
}

const GameCard = ({ title, accent, onClick }: GameCardProps) => {
  const content = (
    <div className={`card-image-wrapper ${accent}`}>
      <div className="card-pattern"></div>
      <div className="card-overlay">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );

  return (
    <article className="card-item">
      {onClick ? (
        <button type="button" className="card-button" onClick={onClick}>
          {content}
        </button>
      ) : (
        <div className="card-surface">{content}</div>
      )}
    </article>
  );
};

export default GameCard;
