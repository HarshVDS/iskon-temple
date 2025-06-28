import React from 'react'
import donner1 from '../assets/imgs/donner1.webp'
import donner2 from '../assets/imgs/donner2.webp'
import donner3 from '../assets/imgs/donner3.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Causes = () => {
  const navigate = useNavigate()
  const teamMembers = [
    {
      name: 'Glims Bond',
      image: donner1,
      donation: '$256'
    },
    {
      name: 'Sharlok Bin',
      image: donner2,
      donation: '$256'
    },
    {
      name: 'Pristly Hearbart',
      image: donner3,
      donation: '$420'
    },
    {
      name: 'Glims Bond',
      image: donner1,
      donation: '$256'
    },
    {
      name: 'Sharlok Bin',
      image: donner2,
      donation: '$256'
    },
    {
      name: 'Pristly Hearbart',
      image: donner3,
      donation: '$420'
    },    {
      name: 'Glims Bond',
      image: donner1,
      donation: '$256'
    },
    {
      name: 'Sharlok Bin',
      image: donner2,
      donation: '$256'
    },
    {
      name: 'Pristly Hearbart',
      image: donner3,
      donation: '$420'
    },
  ];
  
  return (
    <div>

  <div className="page-title-area bg-13">
    <div className="container">
      <div className="page-title-content">
        <h2>Donor</h2>
        <ul>
          <li>
            <a href="index.html">
              Home
            </a>
          </li>
          <li className="active">Donor</li>
        </ul>
      </div>
    </div>
  </div>
  <section className="team-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            {/* <span className="top-title">Team Member</span> */}
            <h2>Behind The Donor's Of </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, perferendis facilis! Magni explicabo nam velit nulla officiis dolorum? Ducimus illum</p>
          </div>
          <div className="row">
      {teamMembers.map((member, index) => (
        <div className="col-lg-4 col-sm-6" key={index}>
          <div className="single-team">
            <div className="team-img">
              <img src={member.image} alt="Image" />
              <ul className="team-link">
                <li>
                  <a href="#">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-pinterest-alt" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="team-content">
              <h3>{member.name}</h3>
              <span>Donate {member.donation}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
        <div className='line' >
          <p onClick={() => navigate("/donation")} style={{ color: "white" }}>Become a Donor <IoIosArrowRoundForward style={{ fontSize: '35px' }} /></p>
        </div>
      </section>
</div>

  )
}

export default Causes
