import profile from "./assets/images/me.jpg";
import workStat from "./assets/images/workStat.jpg";

import {
  FaLocationArrow,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGithub,
  FaTrello,
  FaWordpress,
  FaPlaystation,
} from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { BiLogoMongodb, BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";
import { MdDevices } from "react-icons/md";
import { TfiBrushAlt } from "react-icons/tfi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { RiArtboardLine } from "react-icons/ri";
import { LuGitCompareArrows } from "react-icons/lu";

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

const servicesLeft = [
  {
    icon: <RiArtboardLine />,
    title: "UI/UX",
    desc: "Intuitive, user-centered designs that make every interaction effortless",
  },
  {
    icon: <MdDevices />,
    title: "Web Design",
    desc: "Stunning, pixel-perfect websites that captivate and convert",
  },
  {
    icon: <FaPlaystation />,
    title: "Mobile App",
    desc: "Seamless mobile experiences built for the way people really use their phones",
  },
];

const servicesRight = [
  {
    icon: <HiOutlineRocketLaunch />,
    title: "Development",
    desc: "Clean, scalable code that powers reliable digital products",
  },
  {
    icon: <LuGitCompareArrows />,
    title: "Integration",
    desc: "Connecting your tools and platforms into one smooth, efficient workflow",
  },
  {
    icon: <TfiBrushAlt />,
    title: "Design & Creativity",
    desc: "Bold, original design that makes your brand impossible to ignore",
  },
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
      <div className="three">
          <div className="col">
            {servicesLeft.map((s, i) => (
              <div className="card" key={i}>
                <div className="card-icon">{s.icon}</div>
                <div>
                  <p className="card-title">{s.title}</p>
                  <p className="card-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <img src={workStat} alt="workspace" className="center-img" />
          <div className="col">
            {servicesRight.map((s, i) => (
              <div className="card" key={i}>
                <div className="card-icon">{s.icon}</div>
                <div>
                  <p className="card-title">{s.title}</p>
                  <p className="card-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Services;
