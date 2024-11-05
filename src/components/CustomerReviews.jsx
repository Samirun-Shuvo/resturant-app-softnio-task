import { useState, useEffect } from "react"; 
import preb from "../assets/popular-foods/preb.png";
import next from "../assets/popular-foods/next.png";
import img from "../assets/customer-reviews/img.png";
import play from "../assets/customer-reviews/Play.png";
import c1 from "../assets/customer-reviews/c1.png";
import vector from "../assets/customer-reviews/Vector (Stroke).svg";
import leftSideImg from "../assets/customer-reviews/leftSideImg.png";
import rightSideImg from "../assets/customer-reviews/rightSideImg.png";

const CustomerReviews = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Khalid Al Dawsry",
      rating: 4,
      reviewText:
        "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
      address: "Jeddah, Saudi",
      profileImg: c1,
    },
    {
      id: 2,
      name: "Amira Khan",
      rating: 5,
      reviewText:
        "I would definitely recommend it. You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry).",
      address: "Dubai, UAE",
      profileImg: c1,
    },
    // Add more reviews as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length
    );
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Change slides every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  });

  const currentReview = reviewsData[currentIndex];

  return (
    <div className="position-relative">
      <div
        className="d-none d-md-block position-absolute"
        style={{
          left: 0,
          top: 70,
          zIndex: 1,
        }}
      >
        <img
          src={leftSideImg}
          alt=""
          className="img-fluid"
          style={{ maxWidth: "110px", height: "auto" }}
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
              What Some of my Customers Say
            </h1>
          </div>
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

        {/* Displaying current review */}
        <div className="my-slider my-5">
          <div className="card mb-3" style={{ height: "450px" }}>
            <div className="row g-0 h-100">
              <div className="col-md-7 order-0 order-md-1 position-relative">
                <img
                  src={img}
                  className="img-fluid rounded-start cover"
                  alt="Customer Review Image"
                  style={{ height: "460px", width: "100%" }}
                />

                <div
                  className="position-absolute top-50 start-50 translate-middle"
                  style={{
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={play} alt="Play" className="img-fluid" />
                </div>
              </div>
              <div
                className="col-md-5 order-1 order-md-0"
                style={{ backgroundColor: "rgba(255, 201, 0, 1)" }}
              >
                <div className="card-body">
                  <div className="m-5 p-4">
                    <i className="bi bi-quote fw-bold"></i>
                    <p className="card-text px-3 pb-2">
                      {currentReview.reviewText}
                    </p>
                    <div className="px-3 mt-3 pt-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="fw-bold">{currentReview.name}</h6>
                          <p className="text-muted mb-0">
                            {currentReview.address}
                          </p>
                        </div>
                        <div>
                          <img
                            className="rounded-4"
                            src={currentReview.profileImg || "path/to/placeholder.png"} // Ensure this path is correct
                            height={36}
                            width={36}
                            alt={`${currentReview.name}'s profile`}
                          />
                        </div>
                      </div>
                    </div>
                    <hr
                      className="mx-3"
                      style={{
                        height: "3px",
                        backgroundColor: "black",
                        border: "none",
                      }}
                    />
                  </div>
                  <div
                    className="position-absolute"
                    style={{
                      left: 0,
                      bottom: 80,
                    }}
                  >
                    <img
                      src={vector}
                      alt=""
                      className="img-fluid"
                      style={{ maxWidth: "150px", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      <div
        className="d-none d-md-block position-absolute"
        style={{
          right: 0,
          bottom: -20,
          zIndex: 1,
        }}
      >
        <img
          src={rightSideImg}
          alt=""
          className="img-fluid"
          style={{ maxWidth: "220px", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default CustomerReviews;
