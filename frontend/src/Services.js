import profile from "./assets/images/me.jpg";
import {
  FaLocationArrow,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGithub,
  FaTrello,
  FaWordpress,
} from "react-icons/fa";
import { FaFlutter, FaPython } from "react-icons/fa6";
import { BiLogoMongodb, BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";

const techLogos = [
  { icon: <BiLogoMongodb />, alt: "MongoDB", name: "MongoDB" },
  { icon: <FaGithub />, alt: "GitHub", name: "GitHub" },
  { icon: <FaTrello />, alt: "Trello", name: "Trello" },
  { icon: <FaWordpress />, alt: "WordPress", name: "WordPress" },
  { icon: <FaPython />, alt: "Python", name: "Python" },
  { icon: <BiLogoSpringBoot />, alt: "Spring", name: "Spring" },
  { icon: <TbBrandVscode />, alt: "VS Code", name: "VS Code" },
  { icon: <FaReact />, alt: "React", name: "React" },
  { icon: <FaFigma />, alt: "Figma", name: "Figma" },
  { icon: <FaNodeJs />, alt: "Node.js", name: "Node.js" },
];

const Services = () => {
  return (
    <div className="services">
      <div className="one">
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
      <div className="two">
        <div className="skills-header">
          <hr />
          <span>I can work with</span>
          <hr />
        </div>
        <div className="skills-scroll">
          <div className="scroll-track">
            {techLogos.map((logo, index) => (
              <div className="logo-item" key={index}>
                <div className="icon">{logo.icon}</div>
                <span>{logo.name}</span>
              </div>
            ))}
            {techLogos.map((logo, index) => (
              <div className="logo-item" key={`dup-${index}`}>
                <div className="icon">{logo.icon}</div>
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="two"></div>
    </div>
  );
};

export default Services;
