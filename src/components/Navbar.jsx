import React, { useEffect, useState } from 'react';
import '../css/Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [active, setActive] = useState('home');

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'light';
    document.body.className = stored;
    setTheme(stored);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let current = "";
      sections.forEach((sec) => {
        const secTop = sec.offsetTop - 80;
        if (window.scrollY >= secTop) {
          current = sec.getAttribute("id");
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h1>My Portfolio</h1>
      </div>

      <ul className="nav-links">
        <li><a href="#home" className={active === "home" ? "active" : ""}>Home</a></li>
        <li><a href="#about" className={active === "about" ? "active" : ""}>About</a></li>
        <li><a href="#skills" className={active === "skills" ? "active" : ""}>Skills</a></li>
        <li><a href="#projects" className={active === "projects" ? "active" : ""}>Projects</a></li>
        <li><a href="#contact" className={active === "contact" ? "active" : ""}>Contact</a></li>
      </ul>

      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar;
