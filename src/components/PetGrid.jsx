import PetCard from "./PetCard";

const PetGrid = ({ pets, onCardClick, expandedMobile }) => {
  return (
    <div className="grid">
      {pets.map((pet) => (
        <div key={pet.id} className="grid__item">
          <PetCard
            pet={pet}
            isExpanded={expandedMobile?.id === pet.id}
            onClick={() => onCardClick(pet)}
          />
        </div>
      ))}
    </div>
  );
};

export default PetGrid;