import { useState } from "react";
import { useGame } from "../context/GamesContext";

import { platformCodes } from "../data/filters";

function Filter({ filterName, opts }) {
  const { query, setQuery } = useGame();
  const [selected, setSelected] = useState("");

  return (
    <span className="rounded-sm bg-stone-200 px-3 py-2 font-semibold dark:bg-indigo-900">
      <label className="capitalize">{filterName}: </label>
      <select
        name={filterName}
        id={filterName}
        value={selected}
        onChange={(evnt) => {
          setSelected(evnt.target.value);
          if (filterName === "sortBy")
            setQuery({ ...query, ordering: evnt.target.value });
          else {
            setQuery({
              ...query,
              platforms: +platformCodes[evnt.target.value],
            });
          }
        }}
      >
        {opts.map((opt) => (
          <option
            value={opt.value}
            platform={opt.platform}
            className="bg-slate-200 dark:bg-indigo-900"
            key={opt.id}
          >
            {opt.label}
          </option>
        ))}
      </select>
    </span>
  );
}

export default Filter;
