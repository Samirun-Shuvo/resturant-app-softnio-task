import bgImg from "../assets/footer/bg.jfif"; // Import the background image

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
      {/* Overlay */}
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

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h3 className="fw-bold my-5">
          We are ready to have you for the best dining experiences
        </h3>

        <div className="container my-4">
          <div className="row text-center">
            {/* Info Blocks */}
            {[
              {
                icon: "bi-clock",
                title: "Opening Hours",
                lines: ["Monday - Sunday", "9:00 AM to 11:30 PM"],
              },
              {
                icon: "bi-telephone-outbound",
                title: "Let's Talk",
                lines: ["Phone: 1-800-222-4545", "Fax: 1-800-222-4545"],
              },
              {
                icon: "bi-envelope",
                title: "Book a Table",
                lines: [
                  "Email: demo@website.com",
                  "Support: support@website.com",
                ],
              },
              {
                icon: "bi-geo-alt",
                title: "Our Address",
                lines: [
                  "123 Street, New York City",
                  "United States of America",
                ],
              },
            ].map((info, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-3 mb-4">
                <i className={`text-warning bi ${info.icon} fs-3`}></i>
                <h5 className="text-uppercase fw-semibold m-3">{info.title}</h5>
                {info.lines.map((line, idx) => (
                  <p key={idx} className="mb-0">
                    <small>{line}</small>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-icons pt-5 mb-5">
          {["facebook", "calendar2-x", "instagram", "linkedin"].map(
            (icon, idx) => (
              <i
                key={idx}
                className={`bi bi-${icon} m-2 border border-1 rounded-circle p-3`}
                style={{ cursor: "pointer", transition: "0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffba00")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              ></i>
            )
          )}
        </div>

        {/* Footer Bottom Text */}
        <p>
          © 2023 <span className="text-warning">Niomax</span> All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
