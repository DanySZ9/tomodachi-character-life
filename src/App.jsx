import { useState, useEffect } from "react";
import CharacterGrid from "./components/CharacterGrid";
import CharacterModal from "./components/CharacterModal";
import CharacterDetail from "./components/CharacterDetail";
import PetGrid from "./components/PetGrid"
import FoodGrid from "./components/FoodGrid"
import { characters } from "./data/characters";
import { pets } from "./data/pets"  
import { foods } from "./data/foods"
import "./App.css";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [expandedMobile, setExpandedMobile] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (character) => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setExpandedMobile(expandedMobile?.id === character.id ? null : character);
    } else {
      setSelectedCharacter(character);
    }
  };

  return (
    <div className="background">
      {showIntro && (
        <div className="presentation">
          <h1 className="title title--line1">Tomodachi Life</h1>
          <h1 className="title title--line2">Characters</h1>
        </div>
      )}

      <div className={`content ${showIntro ? "content--hidden" : "content--visible"}`}>
        <header className="site-header">
          <div className="site-header__inner">
            <span className="site-header__island">
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="currentColor" d="m20 18l-4-5h3l-4-5h2l-5-6l-5 6h2l-4 5h3l-4 5h7v4h2v-4z"/></svg>
            </span>
            <h1 className="site-header__title">Tomodachi Life</h1>
            <p className="site-header__sub">Este es un listado de personajes/personas que esten en un mundo de tomodachi life</p>
          </div>
        </header>

        {/* PERSONAJES O PERSONAS */}
        <div className="catalog">
          <h1 className="catalog-title">Personajes/Personas</h1>
          <CharacterGrid
            characters={characters}
            onCardClick={handleCardClick}
            expandedMobile={expandedMobile}
          />
        </div>

        {/* MASCOTAS */}
        <div className="catalog">
          <h1 className="catalog-title">Mascotas</h1>
          <PetGrid
            pets={pets}
            onCardClick={handleCardClick}
            expandedMobile={expandedMobile}
          />
        </div>

        {/* COMIDAS */}
        <div className="catalog">
          <h1 className="catalog-title">Comida</h1>
          <FoodGrid
            foods={foods}
            onCardClick={handleCardClick}
            expandedMobile={expandedMobile}
          />
        </div>

      </div>

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
};

export default App;