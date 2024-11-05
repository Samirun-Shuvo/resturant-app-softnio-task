import { Link } from "react-router-dom";
import logo from "../assets/logo/Logo.png";
import Button from "./Button";
import "./navbar.css"; 

const Navbar = () => (
  <nav className="navbar navbar-expand-lg sticky-top text-white">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img
          src={logo}
          alt="Restaurant Logo"
          width="200"
          height="30"
          className="d-inline-block align-top"
        />
      </Link>

  
      <button
        className="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

  
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          {["Home", "About", "Portfolio", "Client", "Blog", "Contact"].map(
            (text) => (
              <li className="nav-item" key={text}>
                <Link className="nav-link text-white" to={`/${text.toLowerCase()}`}>
                  {text}
                </Link>
              </li>
            )
          )}
        </ul>

        <Link to="/book-table">
          <Button>Book a Table</Button>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
