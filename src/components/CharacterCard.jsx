const CharacterCard = ({ character, isExpanded, onClick }) => {
  const initials = character.name.slice(0, 2).toUpperCase();

  return (
    <div
      className={`card ${isExpanded ? "card--expanded" : ""}`}
      style={{ "--card-color": character.color }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`Ver detalles de ${character.name}`}
    >
      <div className="card__id-tag">#{String(character.id).padStart(2, "0")}</div>

      <div className="card__image-wrap">
        {character.image ? (
          <img src={character.image} alt={character.name} className="card__image" />
        ) : (
          <div className="card__placeholder">
            <span className="card__initials">{initials}</span>
            <span className="card__placeholder-label">Imagen próximamente</span>
          </div>
        )}
      </div>

      <div className="card__body">
        <p className="card__nickname">{character.nickname}</p>
        <h2 className="card__name">{character.name}</h2>
        <span className="card__personality">{character.personality}</span>
      </div>

      <div className="card__hint">
        <span className="card__hint-desktop">Ver perfil →</span>
        <span className="card__hint-mobile">{isExpanded ? "Cerrar ↑" : "Ver perfil ↓"}</span>
      </div>
    </div>
  );
};

export default CharacterCard;