import CharacterCard from "./CharacterCard";
import CharacterDetail from "./CharacterDetail";

const CharacterGrid = ({ characters, onCardClick, expandedMobile }) => {
  return (
    <div className="grid">
      {characters.map((character) => (
        <div key={character.id} className="grid__item">
          <CharacterCard
            character={character}
            isExpanded={expandedMobile?.id === character.id}
            onClick={() => onCardClick(character)}
          />
          {expandedMobile?.id === character.id && (
            <div className="mobile-detail">
              <CharacterDetail character={character} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CharacterGrid;