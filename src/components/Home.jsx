import React from 'react';
import { motion } from "framer-motion";
import '../css/Home.css';
import profileImg from '../assets/profile.jpg'; 

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <motion.div
          className="home-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hi, I'm <span>Raju Yadav</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I'm a Frontend Developer passionate about building modern, responsive, 
            and user-friendly web applications. I love turning ideas into real-world 
            projects using React, CSS, and JavaScript.
          </motion.p>

          <motion.a
            href="#about"
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Know More
          </motion.a>
        </motion.div>
        <motion.div
          className="home-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.img 
            src={profileImg} 
            alt="Raju Yadav" 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
