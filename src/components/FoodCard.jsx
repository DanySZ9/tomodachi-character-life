const FoodCard = ({ food, isExpanded, onClick }) => {
    
  const initials = food.name.slice(0, 2).toUpperCase();

  return (
    <div
      className={`card ${isExpanded ? "card--expanded" : ""}`}
      style={{ "--card-color": food.color }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`Ver detalles de ${food.name}`}
    >
      <div className="card__id-tag">#{String(food.id).padStart(2, "0")}</div>

      <div className="card__image-wrap">
        {food.image ? (
          <img src={food.image} alt={food.name} className="card__image" />
        ) : (
          <div className="card__placeholder">
            <span className="card__initials">{initials}</span>
            <span className="card__placeholder-label">Imagen próximamente</span>
          </div>
        )}
      </div>

      <div className="card__body">
        <p className="card__nickname">{food.nickname}</p>
        <h2 className="card__name">{food.name}</h2>
        <span className="card__personality">{food.personality}</span>
      </div>

    </div>
  );
};

export default FoodCard;