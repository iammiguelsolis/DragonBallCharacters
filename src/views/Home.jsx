import { useEffect, useState } from "react";
import { CharacterController } from "../controllers/character_controller";
import { Character } from "../models/character_model";
import CharacterCard from "./components/CharacterCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false); // ← nuevo estado para carga

  const cargarPersonajes = async (pagina) => {
    try {
      setLoading(true); // ← inicia carga
      const data = await CharacterController.getCharacterByPage(pagina);
      setCharacters(data);
      setHasMore(data.length === 10);
    } catch (error) {
      console.error("Error al cargar personajes:", error);
    } finally {
      setLoading(false); // ← finaliza carga
    }
  };

  useEffect(() => {
    cargarPersonajes(page);
  }, [page]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-orange-600">
        Dragon Ball Characters
      </h1>

      {loading ? (
        <div className="flex items-center justify-center h-[80vh]">
          <div className="loading"></div>
        </div>
      ) : (
        <section className="flex justify-center items-center gap-10">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="text-4xl hover:text-orange-600 transition disabled:opacity-30"
          >
            <FaChevronLeft />
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-10">
            {characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>

          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={!hasMore}
            className="text-4xl hover:text-orange-600 transition disabled:opacity-30"
          >
            <FaChevronRight />
          </button>
        </section>
      )}
    </div>
  );
};

export default Home;
