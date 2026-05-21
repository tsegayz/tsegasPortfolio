import profile from "./assets/images/me.jpg";
import { FaLocationArrow } from "react-icons/fa";

const Services = () => {
  return (
    <div className="services">
      <img src={profile} alt="Tsega Yaekob" className="services-avatar" />

      <div className="tag"> Tsega Yaekob </div>
      <p className="services-subtitle">
        Building digital products, brands, and experiences
      </p>
      <button className="services-btn">
        Contact me
        <span className="arrow">
          <FaLocationArrow
            style={{
              transform: "rotate(40deg)",
              color: "white",
              fontSize: "16px",
            }}
          />
        </span>
      </button>
    </div>
  );
};

export default Services;
