import wb from "../img/wb_mockup.png";
function Projects() {
  return (
    <div className="projects">
      <h1 className="projecthead">Projects</h1>
      <div className="wordbox">
        <div className="projectwords">
          <p className="projecttitle">WordBox</p>
          <p>
            
            Built a web app that contains various tools for performing
            operations on files and words. Some of the tools are Image Text
            Extractor and PDF reader (PDF to Speech).
          </p>
          <p>
            
            Developed this web app using HTML, CSS, JavaScript, Bootstrap, Sass,
            jQuery, express, node, and ejs.
          </p>
          <div className="visitproject">
            <a href="dd">Website</a>
            <a href="dd">Code</a>
          </div>
        </div>
        <img src={wb} alt="wb_mockup" />
      </div>
      <div className="edemcreatives"></div>
      <div className="gameisland"></div>
    </div>
  );
}

export default Projects;
