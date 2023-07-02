import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
// import logo from "../assets/images/405_Square.png";
import Link from "next/link";
function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav>
      <div className="navbar">
        {/* <img src={logo} alt="logo" /> */}
        <p>collins abrusu</p>
        <ul>
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
          {/* <li>
            <Link href="/reservations">Reservation</Link>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li> */}
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
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/offering">Offering</Link>
        </li>
        <li>
          <Link href="/menu">Menu</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/">Reservation</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
