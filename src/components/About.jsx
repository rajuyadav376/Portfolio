import React from 'react';
import { motion } from "framer-motion";
import '../css/About.css';

const About = () => {
  return (
    <section id="about" className="about">

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me :-
      </motion.h2>

      <div className="about-container">
        <motion.div
          className="about-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p>
            Hello! I'm <strong>Raju Yadav</strong>, a passionate and dedicated web developer with a strong foundation in
            front-end technologies. I specialize in creating responsive, user-friendly websites and web applications using
            <strong> React.js, HTML, CSS, and JavaScript</strong>.
          </p>

          <p>
            I enjoy transforming complex problems into simple, beautiful, and intuitive designs. Whether it's building a clean
            landing page or a full portfolio website, I focus on writing clean, efficient code and delivering great user
            experiences.
          </p>

          <p>
            I'm always eager to learn and grow. Currently, I'm exploring backend technologies like <strong>Node.js</strong> and
            <strong> MongoDB</strong> to become a full-stack developer. I love taking on challenges and continuously improving
            my skills with every project I build.
          </p>

          <p>
            Outside of coding, I enjoy exploring new tech trends, watching educational content, and contributing to open-source
            when I can.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>🧑‍🎓 Education</h3>
            <ul className="education">
              <li>
                <strong>B.Tech in Computer Science</strong> — Rai University, 2024 - 2025
              </li>
              <li>
                <strong>Higher Secondary</strong> — Our Lady of Help English School, 2022 - 2024
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>🧑‍💻 Experience</h3>
            <ul className="experience">
              <li>
                <strong>Frontend Intern</strong> at DevCompany (Jun 2024 - Aug 2024)<br />
                Built UI components using React, improved responsiveness and accessibility.
              </li>
              <li>
                <strong>Freelance Projects</strong><br />
                Developed portfolio sites and landing pages for local businesses.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>🎓 Certifications</h3>
            <ul className="certifications">
              <li>Responsive Web Design – freeCodeCamp</li>
              <li>Frontend Development – Coursera</li>
            </ul>
          </motion.div>

          <motion.a
            href="/resume.pdf"
            download
            className="btn-download"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
