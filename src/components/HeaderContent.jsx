import Button from "./Button";
import img from "../assets/header/header-img.png";
import vector from "../assets/header/Vector.png";
import "./headerContent.css";

const HeaderContent = () => (
  <header className="header-container container mt-4 py-4">
    <div className="row justify-content-center align-items-center g-4">
      <div className="col-md-6 text-start">
        <h2 className="header-title display-4 fw-bold mb-4 ">
          Taste the Authentic Saudi Cuisine
        </h2>
        <p className="header-description lead mb-4">
          Experience the finest flavors crafted by top Saudi chefs, offering an
          authentic culinary journey beyond expectation.
        </p>
        <Button>Explore Menu</Button>
      </div>
      <div className="col-md-6 text-center position-relative">
        <img
          src={img}
          alt="Authentic Saudi Cuisine"
          className="header-image img-fluid rounded"
        />
        <img
          src={vector}
          alt="Decorative Vector"
          className="header-vector position-absolute"
        />
      </div>
    </div>
  </header>
);

export default HeaderContent;
