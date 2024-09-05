
import React, { useEffect } from 'react';
import '../Styles/Skills.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';



const skills = [

  { name: 'JavaScript', percentage: 90 },
  { name: 'React', percentage: 85 },
  { name: 'CSS', percentage: 80 },
  { name: 'HTML', percentage: 95 },
  { name: 'Bootsrap', percentage: 70 },
];
const backskill = [
  { name: 'Node.js', percentage: 75 },
  { name: 'MongoDB', percentage: 60 },
  { name: 'Express', percentage: 60 }
];


const Skills = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id='id'>
    <h2>Skills</h2>
    <div className="skills-container">
      <div className="left" data-aos="fade-left">
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
            <div className="skill-percentage">{skill.percentage}%</div>
          </li>
        ))}
      </ul>
      </div>
      <div className="right" data-aos="fade-right">
      <ul className="skills-list">
        {backskill.map((backskill, index) => (
          <li key={index} className="skill-item">
            <div className="skill-name">{backskill.name}</div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${backskill.percentage}%` }}
              />
            </div>
            <div className="skill-percentage">{backskill.percentage}%</div>
          </li>
        ))}
      </ul>
      </div>
    </div>
    </div>
  );
};

export default Skills;
