import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const isScrolledDown = scrollTop > 0;
      setScrolledDown(isScrolledDown);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-between align-center ${
        scrolledDown ? "down" : ""
      }`}
    >
      <a href="/" className="logo">
        <img
          src="https://res.cloudinary.com/qaz2dc/image/upload/c_crop,h_200,w_550/v1693760194/Portfolio/roniegbu_vb3iz9.png"
          alt="Roni Egbu"
        />
      </a>
      <nav className={isOpen ? "open" : "close"}>
        <ul>
          <li>
            <Link to="/">
              Home
              <div className="line"></div>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              Projects
              <div className="line"></div>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact Me
              <div className="line"></div>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`burger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
    </header>
  );
}

export default Nav;
