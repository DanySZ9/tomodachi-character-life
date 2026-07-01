const PetCard = ({ pet, isExpanded, onClick }) => {
    
  const initials = pet.name.slice(0, 2).toUpperCase();
  
  return (
    <div
      className={`card ${isExpanded ? "card--expanded" : ""}`}
      style={{ "--card-color": pet.color }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`Ver detalles de ${pet.name}`}
    >
      <div className="card__id-tag">#{String(pet.id).padStart(2, "0")}</div>

      <div className="card__image-wrap">
        {pet.image ? (
          <img src={pet.image} alt={pet.name} className="card__image" />
        ) : (
          <div className="card__placeholder">
            <span className="card__initials">{initials}</span>
            <span className="card__placeholder-label">Imagen próximamente</span>
          </div>
        )}
      </div>

      <div className="card__body">
        <p className="card__nickname">{pet.nickname}</p>
        <h2 className="card__name">{pet.name}</h2>
        <span className="card__personality">{pet.personality}</span>
      </div>

      <div className="card__hint">
        <span className="card__hint-desktop">Ver perfil →</span>
        <span className="card__hint-mobile">{isExpanded ? "Cerrar ↑" : "Ver perfil ↓"}</span>
      </div>
    </div>
  );
};

export default PetCard;