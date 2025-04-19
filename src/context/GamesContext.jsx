import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../utils/apiGames";

import { reversePlatformCodes } from "../data/filters";

const initialState = {
  page: 1,
  page_size: 20,
  search: "",
  platforms: 1,
  ordering: "",
};

const GameContext = createContext();

function GameProvider({ children }) {
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const platform = reversePlatformCodes[query.platforms];

  useEffect(() => {
    const getGames = async () => {
      setIsLoading(true);

      try {
        const gamesResponse = await getData("/games", query);

        setGames(gamesResponse);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getGames();
  }, [query]);

  return (
    <GameContext.Provider
      value={{
        games,
        setGames,
        query,
        setQuery,
        platform,
        isLoading,
        error,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const context = useContext(GameContext);

  if (context === undefined)
    throw new Error("Game context cannot be used outside its provider");
  return context;
}

export { GameProvider, useGame };
