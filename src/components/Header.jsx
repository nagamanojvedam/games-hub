import Logo from "./Logo";
import SearchComponent from "./SearchComponent";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <header className="col-span-full flex items-center justify-between gap-5 px-4 py-3">
      <Logo />
      <SearchComponent />
      <ThemeSwitcher />
    </header>
  );
}

export default Header;
