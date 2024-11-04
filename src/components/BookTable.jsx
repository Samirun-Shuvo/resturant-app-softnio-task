import "tiny-slider/dist/tiny-slider.css";
import bg from "../assets/book-table/bg.jfif";
import Button from "./Button";
import "./bookTable.css";

const BookTable = () => {
  return (
    <div
      className="position-relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="container my-5 py-5">
        <div className="text-start mb-4">
          <p className="text-muted fw-semibold d-flex align-items-center mb-2">
            <i className="bi bi-square-fill text-danger me-2"></i>
            <span className="text-danger">Book Now</span>
          </p>
          <h1 className="display-6 fw-bold text-white text-uppercase">
            Book Your Table
          </h1>
          <small className="text-white">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </small>
        </div>
        <form className="row justify-content-start">
          <div className="col-12 col-md-6">
            <div className="row mb-3">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="text-white placeholder-white bg-transparent px-3 py-1 border border-1 w-100"
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="text-white placeholder-white bg-transparent px-3 py-1 border border-1 w-100"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  placeholder="Reservation Date"
                  className="text-white placeholder-white bg-transparent px-3 py-1 border border-1 w-100"
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  placeholder="Total People"
                  className="text-white placeholder-white bg-transparent px-3 py-1 border border-1 w-100"
                />
              </div>
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Message"
                className="text-white placeholder-white bg-transparent px-3 py-1 border border-1 w-100"
                rows="4"
              ></textarea>
            </div>
            <Button type="submit">Book Now</Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BookTable;
