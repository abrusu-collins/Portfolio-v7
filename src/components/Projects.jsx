import wb from "../img/wb_mockup.png";
import ec from "../img/ec_mockup.png";
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
            
            Developed this web app using HTML, CSS, JavaScript, Bootstrap, Sass,
            jQuery, express, node, and ejs.
          </p>
          </div>
          <div className="visitproject">
            <a href="dd" id="website">Website</a>
            <a href="dd">Code</a>
          </div>
        </div>
        <img src={wb} alt="wb_mockup" />
      </div>

      <div className="project">
        <div className="projectwords">
          <p className="projecttitle">Edem Creatives</p>
          <div className="description">
          <p>
            
          Designed and developed a site for a graphic designer, this helped people find his works and order designs from him 
through the website. After launching the website, he went from getting fewer than 10 orders a week to 25+ orders a 
week.
          </p>
          <p>
          Developed this site using HTML5, CSS3, and JavaScript.
          </p>
          </div>
          <div className="visitproject">
            <a href="dd" id="website">Website</a>
            <a href="dd">Code</a>
          </div>
        </div>
        <img src={ec} alt="wb_mockup" />
      </div>

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
            
            Developed this web app using HTML, CSS, JavaScript, Bootstrap, Sass,
            jQuery, express, node, and ejs.
          </p>
          </div>
          <div className="visitproject">
            <a href="dd" id="website">Website</a>
            <a href="dd">Code</a>
          </div>
        </div>
        <img src={wb} alt="wb_mockup" />
      </div>
      
    </div>
  );
}

export default Projects;
