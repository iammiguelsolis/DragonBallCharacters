// views/CharacterDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterController } from "../../controllers/character_controller";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CharacterController.getCharacterById(id)
      .then(setCharacter)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center mt-10">Cargando...</div>;

  if (!character) return <div>No se encontró el personaje</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">{character.name}</h1>
      <img src={character.image} alt={character.name} className="w-full rounded shadow mb-4" />
      <p><strong>Ki:</strong> {character.ki}</p>
      <p><strong>Raza:</strong> {character.race}</p>
      <p><strong>Género:</strong> {character.gender}</p>
      <p className="mt-4">{character.description}</p>
    </div>
  );
};

export default CharacterDetail;
