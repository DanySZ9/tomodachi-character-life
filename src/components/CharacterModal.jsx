import { useEffect } from "react";
import CharacterDetail from "./CharacterDetail";

const CharacterModal = ({ character, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>
        <CharacterDetail character={character} />
      </div>
    </div>
  );
};

export default CharacterModal;