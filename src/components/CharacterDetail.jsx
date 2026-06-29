const CharacterDetail = ({ character }) => {
  return (
    <div className="detail" style={{ "--card-color": character.color }}>
      <div className="detail__header">

        <div className="detail__title">
          <p className="detail__nickname">{character.nickname}</p>
          <h2 className="detail__name">{character.name}</h2>
          <span className="detail__personality">{character.personality}</span>
        </div>
      </div>

      <p className="detail__description">{character.description}</p>

      <div className="detail__food">
        <div className="detail__food-item detail__food-item--love">
          <span className="detail__food-icon">💖</span>
          <div>
            <p className="detail__food-label">Comida favorita</p>
            <p className="detail__food-value">{character.favoriteFood}</p>
          </div>
        </div>
        <div className="detail__food-item detail__food-item--hate">
          <span className="detail__food-icon">💔</span>
          <div>
            <p className="detail__food-label">No le gusta</p>
            <p className="detail__food-value">{character.leastFavoriteFood}</p>
          </div>
        </div>
      </div>

      <div className="detail__media">


        <div className="detail__media-block">
          <p className="detail__media-label">Interacciones</p>
          <div className="detail__media-placeholder detail__media-placeholder--video">
            {character.video ? (
              <video src={character.video} controls />
            ) : (
              <>
                <span className="detail__media-icon">🎬</span>
                <span>Video próximamente</span>
              </>
            )}
          </div>
        </div>

        <div className="detail__media-block">
          <p className="detail__media-label">Voz</p>
          <div className="detail__media-placeholder detail__media-placeholder--audio">
            {character.audio ? (
              <audio src={character.audio} controls />
            ) : (
              <>
                <span className="detail__media-icon">🎵</span>
                <span>Audio próximamente</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;