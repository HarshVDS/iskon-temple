import React from 'react';
import prabhupadacare from '../assets/imgs/srila prabhupada care img.jpg';
import prabhupadamission from '../assets/imgs/bhagavad-gita-16-05-by-srila-pra.jpg';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
const navigate=useNavigate()

  return (
    <div>
      {/* Page Title Section */}
      <div className="page-title-area bg-1">
        <div className="container">
          <div className="page-title-content">
            <h2>About Us</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="active">About Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src={prabhupadacare} alt="Srila Prabhupada Care" style={{ borderRadius: '15px' }} />
              </div>
            </div>
            <div className="col-lg-6">
            <div className="about-content">
  <span className="top-title">About</span>
  <h2>Introduction to Srila Prabhupada Disciples Care Program</h2>

  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
    <p style={{ fontSize: '18px', flex: '1 1 60%' }}>
      The Srila Prabhupada Disciple Care Program is a heartfelt initiative inspired by the visionary guidance of His Holiness Jayapataka Swami Maharaja and His Holiness Gopal Krishna Goswami Maharaja. This program is dedicated to honoring and supporting the disciples of His Divine Grace A.C. Bhaktivedanta Swami Srila Prabhupada, the founder-acharya of ISKCON.
    </p>

    <div style={{ display: 'flex', gap: '10px' }}>
      <button onClick={() => navigate("/Team")} style={{ padding: '.5rem 1rem', backgroundColor: '#f99115', color: 'white', borderRadius: '10px' }}>
        <span>Meet the team</span>
      </button>
      <button onClick={() => navigate("/Volunteer")} style={{ padding: '.5rem 1rem', backgroundColor: '#f99115', color: 'white', borderRadius: '10px' }}>
        <span>Meet the volunteers</span>
      </button>
    </div>
  </div>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <h2>Vision & Mission</h2>
                <p>To honor the lifelong dedication and service of Srila Prabhupada's disciples by providing compassionate care and support as they age to lead a life with dignity and purpose in their later years.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                <img src={prabhupadamission} alt="Srila Prabhupada Mission" style={{ borderRadius: '2rem' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
