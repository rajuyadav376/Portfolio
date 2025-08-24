import React from 'react'
import '../css/Skills.css';

const skills = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript (ES6+)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Node.js (Learning)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB (Learning)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills ⚡</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills;
