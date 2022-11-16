import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img1 from "../img/antonio.png";
import img2 from "../img/mawuli2.png";
import img3 from "../img/hotelvivi.png";
import img4 from "../img/devtech.png";

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="projects">
      <p className="projects-title">Recent Works✨</p>
      <div className="project1" id="projects">
        <div className="project-about" data-aos="zoom-in">
          <p className="project-name">Mawuli's Art🎨</p>
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
        <img data-aos="zoom-out" src={img2} alt="" />
      </div>
      <div className="project2" id="projects">
        <img data-aos="zoom-out" src={img1} alt="" />
        <div className="project-about" data-aos="zoom-in">
          <p className="project-name">Antonio Fotografo📸</p>
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
      </div>
      <div className="project3" id="projects">
        <div className="project-about" data-aos="zoom-in">
          <p className="project-name">Hotelvivi🏨</p>
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
        <img data-aos="zoom-out" src={img3} alt="" />
      </div>
      <div className="project4" id="projects">
        <img data-aos="zoom-out" src={img4} alt="" />
        <div className="project-about" data-aos="zoom-in">
          <p className="project-name">DevTech💻</p>
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
      </div>
      <div className="more">
        <a href="/allprojects">View more projects</a>
      </div>
    </div>
  );
}

export default Projects;
