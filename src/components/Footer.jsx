import bgImg from "../assets/footer/bg.jfif";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${bgImg}) no-repeat center center / cover`,
        color: "white",
        padding: "4rem 0",
        textAlign: "center",
        position: "relative",
        overflow: "hidden", // Prevents content overflow
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark overlay
          zIndex: 1,
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        <h3 className="fw-bold my-5 d-flex flex-wrap justify-content-center align-items-center">
          We are ready to have you for the best dining experiences
        </h3>

        <div className="container my-4">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0">
              <i className="text-warning bi bi-clock fs-3"></i>
              <h5 className="text-uppercase fw-semibold m-3">Opening Hours</h5>
              <p className="mb-0">
                <small>Monday - Sunday</small>
              </p>
              <p>
                <small>9:00 AM to 11:30 PM</small>
              </p>
            </div>

            <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0">
              <i className="text-warning bi bi-telephone-outbound fs-3"></i>
              <h5 className="text-uppercase fw-semibold m-3">
                Let&apos;s Talk
              </h5>
              <p className="mb-0">
                <small>Phone: 1-800-222-4545</small>
              </p>
              <p>
                <small>Fax: 1-800-222-4545</small>
              </p>
            </div>

            <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0">
              <i className="text-warning bi bi-envelope fs-3"></i>
              <h5 className="text-uppercase fw-semibold m-3">Book a Table</h5>
              <p className="mb-0">
                <small>Email: demo@website.com</small>
              </p>
              <p>
                <small>Support: support@website.com</small>
              </p>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <i className="text-warning bi bi-geo-alt fs-3"></i>
              <h5 className="text-uppercase fw-semibold m-3">Our Address</h5>
              <p className="mb-0">
                <small> 123 Street, New York City</small>
              </p>
              <p>
                <small>United States of America</small>
              </p>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="pt-5 mb-5">
            {["facebook", "calendar2-x", "instagram", "linkedin"].map(
              (icon, idx) => (
                <i
                  key={idx}
                  className={`bi bi-${icon} m-2 border border-1 rounded-5 p-3`}
                  style={{
                    cursor: "pointer",
                    transition: "color 0.3s, transform 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffba00";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "inherit";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                ></i>
              )
            )}
          </div>

          <p>
            © 2023 <span className="text-warning">Niomax</span> All Rights
            Reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
