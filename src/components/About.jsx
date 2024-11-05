import { useState } from "react";
import image from "../assets/about/Image.png";
import phoneNumber from "../assets/about/phone-number.png";
import Button from "./Button";
import AboutCards from "./AboutCards";
import "./about.css";

const tabContents = {
  about: {
    title: "Exceptional culinary experience and delicious food",
    description:
      "We are a company committed to delivering quality services with a strong focus on reliability, authenticity, and exceeding client expectations. Our team is built on a foundation of diverse expertise, united by a shared passion for excellence and continuous innovation. Every project we undertake is approached with a client-centered mindset, ensuring we understand and align with the unique goals of those we serve. Our commitment goes beyond delivering solutions—we strive to establish lasting partnerships, built on trust and transparency.",
  },
  experience: {
    title: "Delivering Excellence Through Experience",
    description:
      "Our years of experience enable us to deliver outstanding solutions across various projects and industries. Each challenge we face has strengthened our skills, allowing us to approach new projects with refined strategies, innovative thinking, and a client-centered approach. With a foundation built on experience and commitment, we bring a depth of expertise that makes a difference. Our team has been tested and proven across numerous successful projects, each adding to our insight and enhancing the value we bring to clients.",
  },
  contact: {
    title: "Start the Conversation with us",
    description:
      "At Softnio restaurant, we value open communication and are eager to assist you with any inquiries or support you may need. Whether you have questions about our services, need assistance with an ongoing project, or simply want to connect, our team is here for you. You can reach us via email at contact@yourcompany.com or by phone at (123) 456-7890. We also encourage you to fill out the contact form on our website, and we’ll respond promptly. Your feedback is important to us, and we look forward to hearing from you!",
  },
};

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderTabContent = () => {
    const { title, description } = tabContents[activeTab];
    return (
      <div className="tab-pane fade show active">
        <h3 className="fw-bold mb-3 ps-3">{title}</h3>
        <p className="text-muted ps-3">{description}</p>
        <div>
          <Button>About More</Button>
          <img
            src={phoneNumber}
            alt="Contact Us"
            className="contact-image img-fluid rounded ms-4"
          />
        </div>
      </div>
    );
  };

  return (
    <section id="about" className="about-section">
      <div className="container my-5 py-5">
        <div className="row g-5">
          <div className="col-md-6">
            <img
              src={image}
              alt="About Us"
              className="about-image img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <div className="tab-container bg-white rounded">
              <ul className="nav nav-tabs mb-3">
                {Object.keys(tabContents).map((tab) => (
                  <li className="nav-item" key={tab}>
                    <button
                      className={`nav-link ${activeTab === tab ? "active bg-danger text-white" : ""}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content">{renderTabContent()}</div>
            </div>
          </div>
        </div>
        <AboutCards />
      </div>
    </section>
  );
};

export default About;
