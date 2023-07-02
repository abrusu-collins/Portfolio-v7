import React from "react";
import { DiSass } from "react-icons/di";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
function Skills() {
  return (
    <div className="skills">
      <div className="skills-inner">
        <p className="title">Technologies I use</p>
        <p className="skills-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui labore
        soluta cum adipisci iusto in expedita fugiat tenetur et, voluptate
        suscipit? Accusantium fugiat rerum quisquam molestiae dicta quidem sunt
        ducimus.  Accusantium fugiat rerum quisquam molestiae dicta quidem sunt
        
        </p>
        <div className="techs">
          <BiLogoJavascript />
          <BiLogoTypescript />
          <FaReact />
          <SiNextdotjs />
          <DiSass />
        </div>
      </div>
    </div>
  );
}

export default Skills;
