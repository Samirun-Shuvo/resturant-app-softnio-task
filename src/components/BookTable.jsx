import "tiny-slider/dist/tiny-slider.css";
import bg from "../assets/book-table/bg.jfif";
import Button from "./Button";
import "./bookTable.css";
import { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const BookTable = () => {
  const [bookingData, setBookingData] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const handleBooking = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Validate inputs
    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setBookingData((prevData) => [...prevData, data]);
    console.log([...bookingData, data]);
    setFormErrors({});
    event.target.reset();

    // Show success alert
    Swal.fire({
      title: "Booking Successful!",
      text: "Your table has been booked successfully.",
      icon: "success",
      confirmButtonText: "Okay",
    });
  };

  const validateForm = (data) => {
    const errors = {};
    const today = new Date().toISOString().split("T")[0];

    if (!data.name.trim()) errors.name = "Name is required.";
    if (
      !data.email.trim() ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)
    )
      errors.email = "A valid email is required.";
    if (!data.date || data.date < today)
      errors.date = "Date must be today or a future date.";
    if (!data.people || isNaN(data.people) || data.people <= 0)
      errors.people = "Number of people must be a positive number.";

    return errors;
  };

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
        <div className="text-start my-2 py-2">
          <p className="text-muted fw-semibold d-flex align-items-center my-2">
            <i className="bi bi-square-fill text-danger me-2"></i>
            <span className="text-danger">Book Now</span>
          </p>
          <h1 className="display-6 fw-bold text-white text-uppercase my-2">
            Book Your Table
          </h1>
          <small className="text-white my-2">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </small>
        </div>
        <form
          onSubmit={handleBooking}
          className="row justify-content-start my-5"
        >
          <div className="col-12 col-md-6">
            <div className="row mb-3">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name*"
                  className="text-white placeholder-white bg-transparent px-3 py-1 border border-1 w-100"
                  required
                />
                {formErrors.name && (
                  <small className="text-danger">{formErrors.name}</small>
                )}
              </div>
              <div className="col-12 col-md-6">
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="text-white placeholder-white bg-transparent px-3 py-1 border border-1 w-100"
                  required
                />
                {formErrors.email && (
                  <small className="text-danger">{formErrors.email}</small>
                )}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <input
                  name="date"
                  type="text"
                  id="dateInput"
                  className="date-placeholder text-white placeholder-white bg-transparent px-3 py-1 border border-1 w-100"
                  onFocus={(e) => {
                    e.target.type = "date";
                    e.target.classList.add("date-input-focused");
                  }}
                  onBlur={(e) => {
                    e.target.type = "text";
                    e.target.classList.remove("date-input-focused");
                  }}
                  placeholder="Reservation Date"
                  required
                />
                {formErrors.date && (
                  <small className="text-danger">{formErrors.date}</small>
                )}
              </div>
              <div className="col-12 col-md-6">
                <input
                  name="people"
                  type="number"
                  placeholder="Total People"
                  className="text-white placeholder-white bg-transparent px-3 py-1 border border-1 w-100"
                  min="1"
                  onInput={(e) => {
                    if (e.target.value < 1) e.target.value = 1;
                  }}
                  required
                />
                {formErrors.people && (
                  <small className="text-danger">{formErrors.people}</small>
                )}
              </div>
            </div>
            <div className="mb-3">
              <textarea
                name="message"
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
