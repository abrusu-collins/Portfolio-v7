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
             Mawuli is a  self-taught pencil artist, illustrator and graphic designer based in Hohoe,Ghana.
             He wanted a website to showcase his artworks so I created one for him.
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
            I was browsing through a website called mywed and I came across his profile.
            He had captured very beautiful pictures but he didn't have a website. 
            So I reached out, we agreed on the price and I did it for him. 
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
        <div className="project5" id="projects">
          <div className="project-about" data-aos="zoom-in">
            <p className="project-name">Blacko🎵</p>
            <p className="description">
            I am a huge music fan, and I frequently listen to it.
            I've recently been listening to Black Sherif (Blacko), a musician from Ghana.
            I did some research and discovered he doesn't have a website, so I made one for him.
            Technologies used: React and Sass.
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
              Scordy Shots is a ghanaian photo studio owned by Asante Scordy.
              He wanted a website to showcase his photos and also help people book his services online.
              I did it for him and he was very happy with it.
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
            This website contains a library of memory games.
            Some of the games are Verbal Memory, which examines how many words you can store 
            in your short-term memory, Fast Fingers, which improves typing speed, and Reaction 
            Time, which gauges your ability to react quickly to change.
            Technologies used:  HTML, CSS, Sass, Bootstrap, Words API, and JavaScript. 
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
            Built a web app that contains various tools for performing operations on files and words.
            Some of the tools are Image Text Extractor and PDF reader (PDF to Speech).
            Developed this web app using HTML5, CSS3, JavaScript, Bootstrap, Sass, jQuery, express, node, and ejs.
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