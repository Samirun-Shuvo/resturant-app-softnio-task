import Button from "./Button";
import img from "../assets/header/header-img.png";
import vector from "../assets/header/vector.png"; // Ensure the path to the vector image is correct

const HeaderContent = () => {
  return (
    <header className="container mt-5 py-5">
      <div className="row justify-content-center align-items-center g-4">
        <div className="col-md-6">
          <div className="text-start">
            <h2
              className="display-4 fw-bold mb-4 ps-3"
              style={{ color: "#FFFFFF", lineHeight: "1.2" }}
            >
              Taste the Authentic Saudi Cuisine
            </h2>
            <p
              className="lead mb-4 ps-3"
              style={{
                color: "#FFFFFF",
                fontSize: "1.2rem",
                maxWidth: "500px",
              }}
            >
              Experience the finest flavors crafted by top Saudi chefs, offering
              an authentic culinary journey beyond expectation.
            </p>

            <Button>Explore Menu</Button>
          </div>
        </div>
        <div className="col-md-6 text-center position-relative">
          {/* Main Image */}
          <img
            src={img}
            alt="Authentic Saudi Cuisine"
            className="img-fluid rounded"
            style={{
              borderRadius: "15px",
            }}
          />
          {/* Vector Image in the Top-Right Corner */}
          <img
            src={vector}
            alt="Decorative Vector"
            className="position-absolute"
            style={{
              top: "-30px",
              right: "20px",
              width: "60px", // Adjusted size for visual impact
              height: "auto",
              opacity: "0.8",
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderContent;
