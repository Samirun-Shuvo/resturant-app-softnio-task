import HeaderContent from "./HeaderContent";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <header
        style={{
          background:
            "linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)",
          opacity: "1",
          minHeight: "100vh",
        }}
        className="text-white text-center"
        id="header"
      >
        <Navbar />
        <HeaderContent></HeaderContent>
      </header>
    </div>
  );
};

export default Header;
