import { useEffect, useRef } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css"; // Import Tiny Slider CSS
import burger from "../assets/popular-foods/burger.png";
import pizza from "../assets/popular-foods/pizza.png";
import frenchFries from "../assets/popular-foods/frenchfries.png";
import chicken from "../assets/popular-foods/chicken.png";
import preb from "../assets/popular-foods/preb.png";
import next from "../assets/popular-foods/next.png";
import leftSideImg from "../assets/popular-foods/leftSideImg.png";

const PopularFoods = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = tns({
      container: ".my-slider",
      items: 1, // Default number of items to show
      slideBy: 1, // Slide by one item
      autoplay: true, // Enable autoplay
      autoplayButtonOutput: false, // Disable autoplay button
      controls: false, // Disable built-in controls
      nav: false, // Hide navigation dots
      speed: 400, // Transition speed
      responsive: {
        640: { items: 1 }, // Show 1 item on small devices
        768: { items: 2 }, // Show 2 items on medium devices
        1024: { items: 4 }, // Show 4 items on large devices
      },
    });

    sliderRef.current = slider; // Store the slider instance in ref

    return () => {
      slider.destroy(); // Clean up the slider instance on unmount
    };
  }, []);

  const sliderData = [
    {
      id: 1,
      title: "Vegetables Burger",
      desc: "Barbecue Italian cuisine burger",
      img: burger,
    },
    {
      id: 2,
      title: "Special Pizza",
      desc: "Barbecue Italian cuisine pizza",
      img: pizza,
    },
    {
      id: 3,
      title: "Special French Fries",
      desc: "Barbecue Italian cuisine",
      img: frenchFries,
    },
    {
      id: 4,
      title: "Cuisine Chicken",
      desc: "Japanese Cuisine Chicken",
      img: chicken,
    },
    {
      id: 5,
      title: "Vegetables Burger",
      desc: "Barbecue Italian cuisine burger",
      img: burger,
    },
    {
      id: 6,
      title: "Special Pizza",
      desc: "Barbecue Italian cuisine pizza",
      img: pizza,
    },
    {
      id: 7,
      title: "Special French Fries",
      desc: "Barbecue Italian cuisine",
      img: frenchFries,
    },
    {
      id: 8,
      title: "Cuisine Chicken",
      desc: "Japanese Cuisine Chicken",
      img: chicken,
    },
  ];

  // Button handlers for Previous and Next
  const handlePrev = () => {
    sliderRef.current.goTo("prev");
  };

  const handleNext = () => {
    sliderRef.current.goTo("next");
  };

  return (
    <div className="position-relative">
      {/* Left Side Image */}
      <div
        className="d-none d-md-block position-absolute"
        style={{
          left: 0,
          top: 110, // Adjusted for better positioning
          zIndex: 1,
        }}
      >
        <img
          src={leftSideImg}
          alt=""
          className="img-fluid" // Responsive image class
          style={{ maxWidth: "150px", height: "auto" }} // Maintain aspect ratio
        />
      </div>

      <section className="container my-3 py-3">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center my-4">
          {/* Text Content */}
          <div className="text-start mb-3 mb-md-0">
            <p className="text-muted fw-semibold d-flex align-items-center mb-2">
              <i className="bi bi-square-fill text-danger me-2"></i>
              <span className="text-danger">Crispy, Every Bite Taste</span>
            </p>
            <h1 className="display-6 fw-bold text-dark text-uppercase">
              Popular Food Items
            </h1>
          </div>
          {/* Navigation Controls */}
          <div className="d-none d-sm-flex align-items-center gap-3">
            {" "}
            {/* Hide on extra small devices, show on small and larger */}
            <button
              onClick={handlePrev}
              className="btn btn-outline-secondary p-2"
            >
              <img style={{ width: "34px" }} src={preb} alt="Previous" />
            </button>
            <button
              onClick={handleNext}
              className="btn btn-outline-secondary p-2"
            >
              <img style={{ width: "34px" }} src={next} alt="Next" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="my-slider">
          {sliderData.map(({ id, title, desc, img }) => (
            <div key={id}>
              <div className="row justify-content-center">
                <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                  <div className="text-center overflow-hidden">
                    <img
                      style={{ height: "200px", width: "250px" }}
                      src={img}
                      alt={title}
                    />
                    <div>
                      <h1 className="fw-bold mb-4 text-danger">___</h1>
                      <h4 className="fw-bold">{title}</h4>{" "}
                      <p>
                        <small>{desc}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-block d-md-none text-center mt-4">
          {" "}
          {/* Show on small devices only */}
          <div className="d-flex justify-content-center align-items-center gap-3">
            <button
              onClick={handlePrev}
              className="btn btn-outline-secondary p-2"
            >
              <img style={{ width: "34px" }} src={preb} alt="Previous" />
            </button>
            <button
              onClick={handleNext}
              className="btn btn-outline-secondary p-2"
            >
              <img style={{ width: "34px" }} src={next} alt="Next" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularFoods;
