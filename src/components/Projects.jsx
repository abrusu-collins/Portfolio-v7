import wb from "../img/wb_mockup.png";
import ec from "../img/ec_mockup.png";
import gi from "../img/gi_mockup.png";
function Projects() {
  return (
    <div className="projects">
      <h1 className="projecthead">Projects</h1>
      <div className="project">
        <div className="projectwords">
          <p className="projecttitle">WordBox</p>
          <div className="description">
            <p>
              Built a web app that contains various tools for performing
              operations on files and words. Some of the tools are Image Text
              Extractor and PDF reader (PDF to Speech).
            </p>
            <p>
              Developed this web app using HTML5, CSS3, JavaScript, Bootstrap,
              Sass, jQuery, express, node, and ejs.
            </p>
          </div>
          <div className="visitproject">
            <a href="https://clisteocrr.herokuapp.com/" id="website">
              Website
            </a>
            <a href="https://github.com/abrusu-collins/WordBox">Code</a>
          </div>
        </div>
        <img src={wb} alt="wb_mockup" />
      </div>

      <div className="project">
        <div className="projectwords">
          <p className="projecttitle">Edem Creatives</p>
          <div className="description">
            <p>
              Designed and developed a site for a graphic designer, this helped
              people find his works and order designs from him through the
              website. After launching the website, he went from getting fewer
              than 10 orders a week to 25+ orders a week.
            </p>
            <p>Developed this site using HTML5, CSS3, and JavaScript.</p>
          </div>
          <div className="visitproject">
            <a href="https://edemcreatives.netlify.app/" id="website">
              Website
            </a>
            <a href="https://github.com/abrusu-collins/Edem-Creatives">Code</a>
          </div>
        </div>
        <img src={ec} alt="ec_mockup" />
      </div>

      <div className="project">
        <div className="projectwords">
          <p className="projecttitle">Game Island</p>
          <div className="description">
            <p>
              Developed a website that contains a collection of memory games.
            </p>
            <p>
              Some of the games are Fast Fingers (a typing game that helps users
              increase their typing speed), Verbal Memory (a game that tests how
              many words you can keep in your short-term memory), and Reaction
              Time (a game that measures how fast you can react to change)
            </p>
            <p>Built it using HTML5, CSS3, Sass, Bootstrap, and JavaScript.</p>
          </div>
          <div className="visitproject">
            <a href="https://game-island.netlify.app/" id="website">
              Website
            </a>
            <a href="https://github.com/abrusu-collins/Game-Island">Code</a>
          </div>
        </div>
        <img src={gi} alt="gi_mockup" />
      </div>
    </div>
  );
}

export default Projects;
