import { useEffect, useRef } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
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
      items: 1,
      slideBy: 1,
      autoplay: true,
      autoplayButtonOutput: false,
      controls: false,
      nav: false,
      speed: 400,
      responsive: {
        640: { items: 1 },
        768: { items: 2 },
        1024: { items: 4 },
      },
    });

    sliderRef.current = slider;

    return () => {
      slider.destroy();
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

  const handlePrev = () => sliderRef.current.goTo("prev");
  const handleNext = () => sliderRef.current.goTo("next");

  return (
    <div className="position-relative">
      <div
        className="d-none d-md-block position-absolute"
        style={{ left: 0, top: 110, zIndex: 1 }}
      >
        <img
          src={leftSideImg}
          alt="Decorative"
          className="img-fluid"
          style={{ maxWidth: "150px", height: "auto" }}
        />
      </div>

      <section className="container my-3 py-3">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center my-4">
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
                      className="img-fluid"
                    />
                    <div>
                      <h1 className="fw-bold mb-4 text-danger">___</h1>
                      <h4 className="fw-bold">{title}</h4>
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

        {/* Mobile Navigation Controls */}
        <div className="d-block d-md-none text-center mt-4">
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
