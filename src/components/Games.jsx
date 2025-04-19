import { useGame } from "../context/GamesContext";
import GameCard from "./GameCard";

function Games() {
  const { games } = useGame();
  return (
    <section className="grid grid-cols-1 gap-4 p-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </section>
  );
}

export default Games;
