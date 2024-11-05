import HeaderContent from "./HeaderContent";
import Navbar from "./Navbar";
import "./Header.css";

const Header = () => (
  <header className="header text-white text-center" id="header">
    <Navbar />
    <HeaderContent />
  </header>
);

export default Header;
