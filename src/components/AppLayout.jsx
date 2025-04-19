import GenreBar from "./GenreBar";
import GenreBarSkeleton from "./GenreBarSkeleton";
import Header from "./Header";
import Main from "./Main";
import { useGenres } from "../context/GenresContext";

function AppLayout() {
  const { isLoading } = useGenres();
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-stone-100 text-stone-950 transition-all duration-300 ease-linear dark:bg-indigo-950 dark:text-indigo-200">
      <Header />
      {isLoading ? <GenreBarSkeleton /> : <GenreBar />}
      <Main />
    </div>
  );
}

export default AppLayout;
