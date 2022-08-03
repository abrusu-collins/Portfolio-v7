function Skills() {
  return (
    <div className="skills">
      <h1 className="skillshead">Skills</h1>
      <div className="categories">
        <div className="langs">
          <p>Languages, Frameworks and Libraries</p>
          <ul>
            <li> HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>Sass</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className="tools">
          <p>Tools</p>
          <ul>
            <li>Git</li>
            <li>VSCode</li>
          </ul>
        </div>
        <div className="platforms">
          <p>Platforms</p>
          <ul>
            <li>GitHub</li>
            <li>AWS</li>
            <li>GCP</li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Vercel</li>
          </ul>
        </div>
        <div className="softskills">
          <p>Soft Skills</p>
          <ul>
            <li>Leadership</li>
            <li>Public Speaking</li>
            <li>Writing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
