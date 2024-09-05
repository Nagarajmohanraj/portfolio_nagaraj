import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Styles/Certificate.css';
import img1 from '../Assets/Nagaraj MERN STACK Certificate_page-0001.jpg';
import img2 from '../Assets/WhatsApp Image 2024-09-02 at 1.57.46 AM.jpeg';
import img3 from '../Assets/WhatsApp Image 2024-09-02 at 1.57.45 AM.jpeg';
import img4 from '../Assets/Naga Raj (4)_page-0001.jpg';
import img5 from '../Assets/Naga Raj (5)_page-0001.jpg';
import img6 from '../Assets/Naga Raj (6)_page-0001.jpg';


const Certificate = () => {
  return (
    <div id="carouselExampleInterval" className="container carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
       <h2>Certificate</h2>
        <div className="carousel-item active " data-bs-interval="5000">
        <img src={img1}  className='img ' alt="Description of the image" />
        
        </div>
        <div className="carousel-item" data-bs-interval="3000">
        <img src={img2}  className='img ' alt="Description of the image" />

        </div>
        <div className="carousel-item" data-bs-interval="3000">
        <img src={img3}  className='img ' alt="Description of the image" />

        </div>
        <div className="carousel-item" data-bs-interval="3000">
        <img src={img4}  className='img ' alt="Description of the image" />

        </div>
        <div className="carousel-item" data-bs-interval="2000">
        <img src={img5}  className='img ' alt="Description of the image" />

        </div>
        <div className="carousel-item">
        <img src={img6}  className='img ' alt="Description of the image" />

        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Certificate;
