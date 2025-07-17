import { useGame } from "../context/GamesContext";
import Filter from "./Filter";
import Games from "./Games";

import {
  genre as genreOptions,
  sortBy as sortByOptions,
} from "../data/filters";
import GamesSkeleton from "./GamesSkeleton";

function Main() {
  const { platform, isLoading } = useGame();

  return (
    <main className="grow">
      <div className="flex flex-col gap-5">
        <h1 className="mx-2 text-5xl font-bold capitalize">{`${platform} Games`}</h1>
        <div className="mx-2 flex gap-5">
          <Filter label="Platforms" filterName="genre" opts={genreOptions} />
          <Filter label="Order by" filterName="sortBy" opts={sortByOptions} />
        </div>
        {isLoading && <GamesSkeleton />}
        {!isLoading && <Games />}
      </div>
    </main>
  );
}

export default Main;
