function Experience() {
  return (
    <div className="experience">
      <h1 className="header"> Work Experience</h1>
      <div className="instructor">
        <p className="jobtitle">Front-End Development Instructor</p>
        <div className="datelocation">
          <p>Kwame Nkrumah University of Science and Technology,Ghana</p>
          <p>Apr 2021 — May 2021</p>
          <ul>
            <li>
              Taught my juniors front-end technologies (HTML5, CSS3, Bootstrap,
              and JavaScript) during a Bootcamp which takes place every year at
              my college.
            </li>
            <li>
              Built projects with them to show them how to use the technologies
              I taught them.
            </li>
            <li>
              Completed 200+ comprehensive student code reviews aimed at
              encouraging idiomatic coding style and scalable solutions.
            </li>
          </ul>
        </div>
      </div>

      <div className="freelance">
        <p className="jobtitle">Freelance Front-End Developer</p>
        <div className="datelocation">
          <p>Remote, Ghana</p>
          <p>Sep 2020 — Present</p>
          <ul>
            <li>
              Developed websites for small businesses and individuals to help
              their works to be online.
            </li>
          </ul>
        </div>
      </div>

      <div className="intern">
        <p className="jobtitle">Front-End Developer (Intern)</p>
        <div className="datelocation">
          <p>Hypacart, Ghana</p>
          <p>Jun 2020 — Dec 2020</p>
          <ul>
            <li>
              Redesigned and implemented some parts of the User Interface for
              the company's website, The new website's performance was way
              better than the first one and we also recorded an increase in
              sales per week after launching
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
