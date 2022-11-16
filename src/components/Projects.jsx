import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img1 from "../img/antonio.png";
import img2 from "../img/mawuli2.png";
import img3 from "../img/hotelvivi.png";
import img4 from "../img/devtech.png";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 400
    });
  }, []);
  return (
    <div className="projects">
      <p className="projects-title">Recent Works✨</p>
        <div className="project-inner">
        <div className="project1" id="projects">
        <div className="project-about" data-aos="zoom-in">
          <p className="project-name">Mawuli's Art🎨</p>
          <p className="description">
          Mawuli is a  self-taught pencil artist, illustrator and graphic designer based in Hohoe,Ghana.
             He wanted a website to showcase his artworks so I created one for him.
             Technologies used:React and Sass.
          </p>
          <div className="project-links">
            <a href="https://github.com/abrusu-collins/Mawuli-s-art" target="blank">View Code</a>
            <a href="https://mawulis-art.vercel.app/" target="blank">Live Link</a>
          </div>
        </div>
        <img data-aos="zoom-out" src={img2} alt="" />
      </div>
      <div className="project2" id="projects">
        <img data-aos="zoom-out" src={img1} alt="" />
        <div className="project-about" data-aos="zoom-in">
          <p className="project-name">Antonio Fotografo📸</p>
          <p className="description">
          Antonio gargano is a wedding and family photographer based in Catanzaro, Italy.
            I came accross his profile on mywed.
            He had captured very beautiful pictures but he didn't have a website. 
            So I reached out, we agreed on the price and I did it for him. 
            Technologies used:HTML, Sass, and JavaScript.
          </p>
          <div className="project-links">
            <a href="https://github.com/abrusu-collins/Antonio" target="blank">View Code</a>
            <a href="https://antoniogargano.vercel.app/" target="blank">Live Link</a>
          </div>
        </div>
      </div>
      <div className="project3" id="projects">
        <div className="project-about" data-aos="zoom-in">
          <p className="project-name">Hotelvivi🏨</p>
          <p className="description">
          Developed a beautiful website template for hotels to help
            their customers book rooms, order food from their restaurants, 
            book SPA sessions, and a whole lot of functionalities.
            Technologies used: React, React Router DOM, and Sass.
          </p>
          <div className="project-links">
            <a href="https://github.com/abrusu-collins/hotel-vivi" target="blank">View Code</a>
            <a href="https://hotelvivi.netlify.app/" target="blank">Live Link</a>
          </div>
        </div>
        <img data-aos="zoom-out" src={img3} alt="" />
      </div>
      <div className="project4" id="projects">
        <img data-aos="zoom-out" src={img4} alt="" />
        <div className="project-about" data-aos="zoom-in">
          <p className="project-name">DevTech💻</p>
          <p className="description">
          I design and develop websites and mobile applications for small and medium-sized businesses.
            As a result, I made this website to detail all of the services I provide.
            My customers can order services through the website, which I then carry out for them.
            Technologies used: React and Sass.
          </p>
          <div className="project-links">
            <a href="https://github.com/abrusu-collins/DevTech" target="blank">View Code</a>
            <a href="https://dev-tech.vercel.app/" target="blank">Live Link</a>
          </div>
        </div>
      </div>
        </div>
        <div className="more">
        <a href="/allprojects">View all my projects</a>
      </div>
    </div>
  );
}

export default Projects;
