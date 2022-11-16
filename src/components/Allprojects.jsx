import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img1 from "../img/antonio.png";
import img2 from "../img/mawuli2.png";
import img3 from "../img/hotelvivi.png";
import img4 from "../img/devtech.png";
import img5 from "../img/blacko.png";
import img6 from "../img/scordy.png";
import img7 from "../img/game-island.png";
import img8 from "../img/wordbox.png";


function Allprojects() {
  useEffect(() => {
    AOS.init({
      duration: 400
    });
  }, []);
    let year = new Date().getFullYear();
    return ( 
        <div className="projects">
        <p className="projects-title">All Projects✨</p>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              sapiente facere repudiandae inventore. Aut mollitia ipsum, eius modi
              hic beatae maiores ad sequi dolor debitis, ipsam odit asperiores
              temporibus?
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              sapiente facere repudiandae inventore. Aut mollitia ipsum, eius modi
              hic beatae maiores ad sequi dolor debitis, ipsam odit asperiores
              temporibus?
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              sapiente facere repudiandae inventore. Aut mollitia ipsum, eius modi
              hic beatae maiores ad sequi dolor debitis, ipsam odit asperiores
              temporibus?
            </p>
            <div className="project-links">
              <a href="https://github.com/abrusu-collins/DevTech" target="blank">View Code</a>
              <a href="https://dev-tech.vercel.app/" target="blank">Live Link</a>
            </div>
          </div>
        </div>
        <div className="project5" id="projects">
          <div className="project-about" data-aos="zoom-in">
            <p className="project-name">Blacko🎵</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              sapiente facere repudiandae inventore. Aut mollitia ipsum, eius modi
              hic beatae maiores ad sequi dolor debitis, ipsam odit asperiores
              temporibus?
            </p>
            <div className="project-links">
              <a href="https://github.com/abrusu-collins/blacko" target="blank">View Code</a>
              <a href="https://blacko.vercel.app/" target="blank">Live Link</a>
            </div>
          </div>
          <img data-aos="zoom-out" src={img5} alt="" />
        </div>
        <div className="project6" id="projects">
          <img data-aos="zoom-out" src={img6} alt="" />
          <div className="project-about" data-aos="zoom-in">
            <p className="project-name">Scordy Shots📸</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              sapiente facere repudiandae inventore. Aut mollitia ipsum, eius modi
              hic beatae maiores ad sequi dolor debitis, ipsam odit asperiores
              temporibus?
            </p>
            <div className="project-links">
              <a href="https://github.com/abrusu-collins/Scordy-Shots" target="blank">View Code</a>
              <a href="https://scordy-shots.vercel.app/" target="blank">Live Link</a>
            </div>
          </div>
        </div>
        <div className="project7" id="projects">
          <div className="project-about" data-aos="zoom-in">
            <p className="project-name">Game Island🎮</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              sapiente facere repudiandae inventore. Aut mollitia ipsum, eius modi
              hic beatae maiores ad sequi dolor debitis, ipsam odit asperiores
              temporibus?
            </p>
            <div className="project-links">
              <a href="https://github.com/abrusu-collins/Game-Island" target="blank">View Code</a>
              <a href="https://game-island.netlify.app/" target="blank">Live Link</a>
            </div>
          </div>
          <img data-aos="zoom-out" src={img7} alt="" />
        </div>
        <div className="project8" id="projects">
          <img data-aos="zoom-out" src={img8} alt="" />
          <div className="project-about" data-aos="zoom-in">
            <p className="project-name">WordBox🔠</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              sapiente facere repudiandae inventore. Aut mollitia ipsum, eius modi
              hic beatae maiores ad sequi dolor debitis, ipsam odit asperiores
              temporibus?
            </p>
            <div className="project-links">
              <a href="https://github.com/abrusu-collins/WordBox" target="blank">View Code</a>
              <a href="http://clisteocrr.herokuapp.com/" target="blank">Live Link</a>
            </div>
          </div>
        </div>
        <div className="more">
          <p>&copy; {year} - All projects were developed by Abrusu Collins</p>
        </div>
      </div>
     );
}

export default Allprojects;