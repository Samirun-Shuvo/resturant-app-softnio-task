import { Link } from "react-router-dom";
import logo from "../assets/logo/Logo.png"; // Replace with the path to your logo image
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top text-white">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Restaurant Logo"
            width="200"
            height="30"
            className="d-inline-block align-top"
          />
        </Link>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/client">
                Client
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* Book a Table Button */}
          <Link to="/book-table">
            <Button>Book a Table</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
