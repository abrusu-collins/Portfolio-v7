import React, { useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BiSolidBible } from "react-icons/bi";
import { MdHideImage } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { TbTopologyComplex } from "react-icons/tb";
import { BsCameraFill, BsGithub, BsGlobe } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { SiHotelsdotcom } from "react-icons/si";
import { RiPaintFill } from "react-icons/ri";
import projectContent from "../json_files/projects.json";
function Projects() {
  const r = [
    <MdHideImage key={0} />,
    <MdDriveFileRenameOutline key={1} />,
    <BiSolidBible key={2} />,
    <IoLogoGameControllerB key={3} />,
    <TbTopologyComplex key={4} />,
    <SiHotelsdotcom key={5} />,
    <BiCodeAlt key={6} />,
    <RiPaintFill key={7} />,
    <BsCameraFill key={8} />,
  ];
  const [allToggle, setAllToggle] = useState(true);
  const [appsToggle, setAppsToggle] = useState(false);
  const [sitesToggle, setSitesToggle] = useState(false);
  const toggleAll = (e) => {
    e.preventDefault();
    setAllToggle(true);
    setAppsToggle(false);
    setSitesToggle(false);
  };
  const toggleApps = (e) => {
    e.preventDefault();
    setAllToggle(false);
    setAppsToggle(true);
    setSitesToggle(false);
  };
  const toggleSites = (e) => {
    e.preventDefault();
    setAllToggle(false);
    setAppsToggle(false);
    setSitesToggle(true);
  };
  return (
    <div className="projects">
      <p className="title">My recent projects</p>
      <div className="toggle">
        <a
          href=""
          className={allToggle ? "active-toggle" : ""}
          onClick={toggleAll}
        >
          All
        </a>
        <a
          href=""
          className={appsToggle ? "active-toggle" : ""}
          onClick={toggleApps}
        >
          Web Apps
        </a>
        <a
          href=""
          className={sitesToggle ? "active-toggle" : ""}
          onClick={toggleSites}
        >
          Websites
        </a>
      </div>

      <div className="projecct-cards">
        {projectContent.map((projectItem) => {
          return (
            <div key={projectItem.name}>
              <div> {r[projectItem.id]}</div>
              <p>{projectItem.name}</p>
              <p>{projectItem.description}</p>
              <div className="links">
                <a href={projectItem.github}>
                  <BsGithub />
                </a>
                <a href={projectItem.live}>
                  <BsGlobe />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
