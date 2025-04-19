import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../utils/apiGames";

const GenresContext = createContext();

function GenresProvider({ children }) {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGenres = async () => {
      setIsLoading(true);

      try {
        const response = await getData("/genres");
        setGenres(response);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getGenres();
  }, []);
  return (
    <GenresContext.Provider value={{ genres, isLoading, error }}>
      {children}
    </GenresContext.Provider>
  );
}

function useGenres() {
  const context = useContext(GenresContext);

  if (context === undefined)
    throw new Error("Genres context cannot be used outside its provider");

  return context;
}

export { GenresProvider, useGenres };
