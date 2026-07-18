import NavigationMenu from "./NavigationMenu";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import WishlistButton from "./WishlistButton";
import CartButton from "./CartButton";
import Profile from "./Profile";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="h-18 sticky top-0 z-50 bg-white flex items-center gap-6 px-6">
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
    </div>
  );
};

export default Header;