import "../styles/nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
/* MAKE NAVBAR STICKY WHEN SCROLL-DOWN */
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Iconic
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={handleClick}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links" onClick={handleClick}>
              Members
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={handleClick}>
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
