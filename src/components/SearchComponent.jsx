import { useRef, useState } from "react";
import { useGame } from "../context/GamesContext";
import { useDarkMode } from "../context/DarkmodeContext";

function SearchComponent() {
  const { setQuery } = useGame();
  const { isDarkMode } = useDarkMode();
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef();
  return (
    <form
      className="relative flex grow items-center justify-center gap-4"
      onSubmit={(evnt) => {
        evnt.preventDefault();
        if (ref.current)
          setQuery((prev) => {
            return { ...prev, search: ref.current.value };
          });
        setSearchTerm("");
      }}
    >
      <input
        ref={ref}
        type="text"
        className="w-full rounded-full bg-slate-200 px-3 py-2 dark:bg-indigo-900"
        placeholder="Search games..."
        value={searchTerm}
        onChange={(evnt) => setSearchTerm(evnt.target.value)}
      />

      <button className="absolute right-3 h-6 w-6 cursor-pointer">
        <img
          src={`./icons/search-${isDarkMode ? "dark" : "light"}.svg`}
          alt="search icon"
        />
      </button>
    </form>
  );
}

export default SearchComponent;
