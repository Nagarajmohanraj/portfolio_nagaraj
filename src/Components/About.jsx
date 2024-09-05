import React, { useEffect } from 'react';
import '../Styles/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => (

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []),
  
  <section id="about" className="about" data-aos="fade-up">
    <h2>About Me</h2>
    <p>As a passionate web developer, I specialize in creating dynamic, user-centered websites that seamlessly blend functionality with aesthetic appeal. My expertise encompasses a wide range of technologies, from front-end frameworks like React and to back-end solutions such as Node.js. By staying abreast of industry trends and best practices, I ensure that my projects not only meet current standards but also anticipate future needs, ultimately providing clients with innovative solutions that drive success.</p>
     </section>
);

export default About;
