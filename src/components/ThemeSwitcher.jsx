import { useDarkMode } from "../context/DarkmodeContext";

function ThemeSwitcher() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <div className="flex items-center justify-center gap-2">
      <label className="switch">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={(evnt) => setIsDarkMode(evnt.target.checked)}
        />
        <span className="slider"></span>
      </label>
      <p className="font-semibold">{isDarkMode ? "Dark" : "Light"} Mode</p>
    </div>
  );
}

export default ThemeSwitcher;
