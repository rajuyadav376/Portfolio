import React from "react";
import { motion } from "framer-motion";
import loginPageImg from "../assets/loginPageImg.png";
import "../css/Project.css";

const Project = () => {
  const projects = [
    {
      title: "Book Store",
      description:
        "A React-based book store with a user-friendly interface, search functionality, and shopping cart.",
      image: "https://cdn.pixabay.com/photo/2016/11/20/08/58/books-1842261_1280.jpg",
      demo: "https://68a77286416de400970cd790--teal-chimera-2bdd4c.netlify.app/",
      github: "https://github.com/yourusername/bookstore",
    },
    {
      title: "Login Page",
      description:
        "A simple login page with form validation, responsive design, and password toggle feature.",
      image: "",
      demo: "https://login-pages-phi.vercel.app/",
      github: "https://github.com/rajuyadav376/login-Pages",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React & Tailwind, featuring smooth animations and dark mode.",
      image: "/images/portfolio.jpg",
      demo: "https://your-portfolio-demo.com",
      github: "https://github.com/yourusername/portfolio",
    },
  ];

  return (
    <section className="project-section" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        🚀 My Projects
      </motion.h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={project.image || loginPageImg}
              alt={project.title}
              className="project-image"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-buttons">
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn demo-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🌐 Live Demo
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn github-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💻 GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
