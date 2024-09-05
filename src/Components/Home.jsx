import React, { useEffect } from 'react';
import '../Styles/Home.css';
import Resume from'../Assets/Resume.pdf';
import AOS from 'aos' ;
import 'aos/dist/aos.css';



function Home () {
 
   useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id='home' className='home' >
    <div className='cont bg' >
        <div className='row'>
         
            <div className='box1 ' data-aos="fade-right">
                <h4>WEB DEVLOPER</h4>
              <h1>HI, I am <span>NAGARAJ</span> This is My Portfolio.</h1>
              <div className='action-buttons'>
                
              <a href={Resume} download>
              <button>Download CV</button></a>
             </div>
            </div>

            <div className='box2' data-aos="fade-left">
              <div></div>
              <div></div>
              <div></div>

            </div>

        </div>
    

    </div>
    </section>
  );
}


export default Home;
