import NavigationMenu from "./NavigationMenu";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import WishlistButton from "./WishlistButton";
import CartButton from "./CartButton";
import Profile from "./Profile";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="h-16 sticky top-0 z-50 border-b backdrop-blur-md bg-background/80 flex items-center gap-5 px-6 "
    >
      {/* Logo */}
      <Logo />

      {/* Categories Menu */}
      <NavigationMenu />

      {/* Search Bar - grows to fill remaining space */}
      <div className="flex-1 max-w-2xl">
        <SearchBar />
      </div>

      {/* Right-side icon cluster */}
      <div className="flex items-center gap-5 ml-auto">
        <WishlistButton />
        <CartButton />
        <ThemeToggle />
        <Profile />
      </div>
    </header>
  );
};

export default Header;
