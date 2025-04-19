import AppLayout from "./components/AppLayout";
import { DarkModeProvider } from "./context/DarkmodeContext";
import { GameProvider } from "./context/GamesContext";
import { GenresProvider } from "./context/GenresContext";

function App() {
  return (
    <DarkModeProvider>
      <GameProvider>
        <GenresProvider>
          <AppLayout />
        </GenresProvider>
      </GameProvider>
    </DarkModeProvider>
  );
}

export default App;
