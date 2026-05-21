import proj1 from "./assets/images/W1.jpg";
import proj2 from "./assets/images/W2.jpg";
import proj3 from "./assets/images/W3.jpg";
import blob from "./assets/images/blob.svg";
import blob1 from "./assets/images/blob1.svg";
import float1 from "./assets/images/float1.png";
import float2 from "./assets/images/float2.png";
import float3 from "./assets/images/float3.png";
import float4 from "./assets/images/float4.png";

const Work = () => {
  const projects = [
    { title: "WEB DESIGN", image: proj1 },
    { title: "UI/UX DESIGN", image: proj2 },
    { title: "LANDING PAGE", image: proj3 },
  ];

  const floats = [
    {
      title: "EFFOYTA",
      desc: "Mental health app that addresses your issues — mood, support, control.",
      image: proj1,
    },
    {
      title: "Akeray",
      desc: "You can watch and download movies of your choice.",
      image: float2,
    },

    {
      title: "Ardi-travel",
      desc: "A tour guide web application that creates ease of traveling.",
      image: float3,
    },

    {
      title: "Josam",
      desc: "A brand website for a paint manufacturing and distributing company.",
      image: float4,
    },
  ];

  return (
    <div className="works">
      <div className="section-one">
        <img src={blob} className="blob blob-1" alt="" aria-hidden="true" />
        <img src={blob1} className="blob blob-2" alt="" aria-hidden="true" />
        <h2 className="works-title">My Works</h2>
        <div className="cards">
          {projects.map((project, index) => (
            <div className="card-wrapper" key={index}>
              <div className="card">
                <h3 className="card-title">{project.title}</h3>
                <div className="image-stack">
                  <img src={project.image} alt={project.title} />
                  <img src={project.image} alt="" aria-hidden="true" />
                  <img src={project.image} alt="" aria-hidden="true" />
                </div>
              </div>
              <button className="arrow-btn" aria-label="View project">
                ↗
              </button>
            </div>
          ))}
        </div>
        <div className="section-two">
          <button className="tag">Selected Works</button>

          <h2 className="section-two-title">
            A few things I've poured my time into, built with care, and shipped
          </h2>

          <p className="section-two-text">
            Here's a hand-picked selection of projects I've worked on, each one
            taken from idea to delivery.
          </p>
          <div className="arrow">↘</div>

          {/* FLOATING CARD */}
          {floats.map((float, index) => (
            <div className={`preview-card card-${index}`} key={index}>
              <div className="dot-container">
                <div className="dot" />
              </div>
              <h3>{float.title}</h3>
              <p>{float.desc}</p>
              <img src={float.image} alt={float.title} alt="preview" />
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default Work;
