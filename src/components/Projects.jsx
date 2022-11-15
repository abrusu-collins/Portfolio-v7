import img1 from "../img/mawuli.png";
import img2 from "../img/mawuli2.png";

function Projects() {
  return (
    <div className="projects">
      <p className="projects-title">Recent Works✨</p>
      <div className="project1" id="projects">
        <div className="project-about">
          <p className="project-name">Mawuli's Art</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
            sapiente facere repudiandae inventore. Aut mollitia ipsum, eius modi
            hic beatae maiores ad sequi dolor debitis, ipsam odit asperiores
            temporibus?
          </p>
          <div className="project-links">
            <a href="">View Code</a>
            <a href="">Live Link</a>
          </div>
        </div>
        <img src={img2} alt="" />
      </div>
    </div>
  );
}

export default Projects;
