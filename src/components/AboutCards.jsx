import img1 from "../assets/about/img1.png";
import img2 from "../assets/about/img2.png";
import img3 from "../assets/about/img3.png";
import rightImg from "../assets/about/right-side-img.png";

const cards = [
  { id: 1, title: "Fast Delivery", desc: "Within 30 minutes", img: img1 },
  { id: 2, title: "Absolute Dining", desc: "Best buffet restaurant", img: img2 },
  { id: 3, title: "Pickup Delivery", desc: "Grab your food order", img: img3 },
];

const AboutCards = () => {
  return (
    <div className="position-relative">
      <div className="d-none d-md-block position-absolute" style={{ top: -120, right: -100 }}>
        <img src={rightImg} alt="Decorative" className="img-fluid" style={{ width: "100px", height: "auto" }} />
      </div>
      
      <div className="mt-5 pt-5">
        <div className="container">
          <div className="row justify-content-center">
            {cards.map((card) => (
              <div key={card.id} className="col-12 col-md-4 mb-3">
                <div className="card d-flex flex-row align-items-center">
                  <img
                    src={card.img}
                    className="img-fluid rounded-start"
                    alt={card.title}
                    style={{ width: "120px", height: "120px" }} // Ensure images are uniformly sized
                  />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">
                      <small>{card.desc}</small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
