import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <Link to={`/character/${character.id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
        <img src={character.image} alt={character.name} className="w-full h-64 object-contain" />
        <div className="p-4">
          <h2 className="text-xl font-bold">{character.name}</h2>
          <p className="text-gray-600">Ki: {character.ki}</p>
          <p className="text-sm text-gray-500 mt-2 line-clamp-3">{character.getShortDescription(80)}</p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
