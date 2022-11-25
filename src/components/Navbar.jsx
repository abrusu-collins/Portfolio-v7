function Navbar() {
    return ( 
        <nav>
            <a  href="/">Home</a>
            <a href="/allprojects">Projects</a>
            <a href="https://proprogrammer.vercel.app/" target="blank">Blog</a>
            <a className="active" href="mailto:snillochemingson@gmail.com">Send Mail</a>
        </nav>
     );
}

export default Navbar;