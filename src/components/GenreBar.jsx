import { useGame } from "../context/GamesContext";
import { useGenres } from "../context/GenresContext";

function GenreBar() {
  const { query, setQuery } = useGame();
  const { genres } = useGenres();

  console.log(genres);
  return (
    <nav className="hidden lg:flex lg:flex-col lg:gap-4 lg:p-4">
      <h3 className="text-2xl font-bold">Genres</h3>
      <ul className="flex flex-col gap-1">
        {genres.map((genre) => (
          <li
            className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-200 dark:hover:bg-indigo-900 ${genre.slug === query.genres ? "bg-gray-200 dark:bg-indigo-900" : ""}`}
            onClick={() => setQuery({ ...query, genres: genre.slug })}
            key={genre.id}
          >
            <img
              src={genre.image_background}
              className="h-10 w-10 rounded-lg object-cover"
            />
            <a>{genre.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default GenreBar;
