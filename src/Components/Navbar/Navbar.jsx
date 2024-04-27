import React, { useState, useEffect } from "react";
import "./navbar.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "../../assets/logo.svg";
import { FiDownload } from "react-icons/fi";
const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }
    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <nav className="nav">
      <nav className={`active ${show && "hidden"}`}>....</nav>
      <nav className="coloumn">
        <div className="logo">
          <Logo />
        </div>

        <div className="menu-items">
          <ul className="menu-item">
            <li>نقشه شهر</li>
            <li>فاصله شهرها</li>
            <li>قابلیت ها</li>
            <li>تبلیغ در نشان</li>
            <li>حریم خصوصی</li>
            <li>بلاگ</li>
            <li>فرصت های شغلی</li>
          </ul>
          <button className="download-btn">
            <a className="me" href="#">
              <FiDownload />
              دانلود نشان
            </a>
          </button>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
