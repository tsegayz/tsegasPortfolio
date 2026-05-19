
import proj1 from "./assets/images/W1.jpg";
import proj2 from "./assets/images/W2.jpg";
import proj3 from "./assets/images/W3.jpg";
import blob from "./assets/images/blob.svg";
import blob1 from "./assets/images/blob1.svg";

const Work = () => {
  const projects = [
    { title: "WEB DESIGN",   image: proj1 },
    { title: "UI/UX DESIGN", image: proj2 },
    { title: "LANDING PAGE", image: proj3 },
  ];
 
  return (
<section className="works">
  <img src={blob} className="blob blob-1" alt="" aria-hidden="true" />
  <img src={blob1} className="blob blob-2" alt="" aria-hidden="true" />

  <h2 className="works-title">My Works</h2>

  <div className="cards">
    {projects.map((project, index) => (
      <div className="card" key={index}>
        <h3 className="card-title">{project.title}</h3>

        <div className="image-stack">
          <img src={project.image} alt={project.title} />
          <img src={project.image} alt="" aria-hidden="true" />
          <img src={project.image} alt="" aria-hidden="true" />
        </div>
        <button className="arrow-btn" aria-label="View project">↗</button>
      </div>
    ))}
  </div>
</section>
  );
};
 
export default Work;