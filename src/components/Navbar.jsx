import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import Link from "next/link";
function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <p className="name">CA<span>.</span></p>
        <ul>
          <li>
            <a href="#top">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
        <div className="bar">
          {navOpen ? (
            <TfiClose
              color="white"
              size={30}
              onClick={(e) => {
                setNavOpen(!navOpen);
              }}
            />
          ) : (
            <HiBars3BottomRight
              size={35}
              onClick={(e) => {
                setNavOpen(!navOpen);
              }}
            />
          )}
        </div>
      </div>
      <ul className={navOpen ? "mobile-nav" : ""}>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/offering">Projects</Link>
        </li>
        <li>
          <Link href="/menu">Skills</Link>
        </li>
        <li>
          <Link href="/about">Testimonials</Link>
        </li>
        <li>
          <Link href="/events">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
