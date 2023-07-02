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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          molestiae quam? Omnis voluptates architecto nam aut quos libero
          aliquid eum eos maiores cupiditate qui et fugiat enim accusamus,
          tempora harum?
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
