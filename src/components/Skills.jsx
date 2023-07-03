import React from "react";
import { DiSass } from "react-icons/di";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills-inner">
        <p className="title">Technologies I use</p>
        <p className="skills-text">
          These are the powerful tools and technologies I employ to craft
          exceptional digital experiences. From cutting-edge programming
          languages to robust libraries and frameworks, this collection
          represents my proficiency in harnessing the latest technological
          advancements.
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
