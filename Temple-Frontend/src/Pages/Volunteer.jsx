import React from "react";
import Volunteer1 from "../assets/imgs/donner1.webp";
import Volunteer2 from "../assets/imgs/donner2.webp";
import Volunteer3 from "../assets/imgs/donner3.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Volunteer = () => {
  const navigate = useNavigate();
  const teamMembers = [
    {
      name: "Glims Bond",
      image: Volunteer1,
    },
    {
      name: "Sharlok Bin",
      image: Volunteer2,
    },
    {
      name: "Pristly Hearbart",
      image: Volunteer3,
    },
    {
      name: "Glims Bond",
      image: Volunteer1,
    },
    {
      name: "Sharlok Bin",
      image: Volunteer2,
    },
    {
      name: "Pristly Hearbart",
      image: Volunteer3,
    },
  ];

  return (
    <div>
      <div className="page-title-area bg-4">
        <div className="container">
          <div className="page-title-content">
            <h2>Volunteer</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Volunteer</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="team-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            {/* <span className="top-title">Team Member</span> */}
            <h2>Our Volunteer</h2>
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button
            onClick={() => navigate("/becomevolunteer")}
            style={{
              padding: ".5rem 4rem",
              backgroundColor: "#f99115",
              color: "white",
              borderRadius: "10px",
            }}
          >
            {" "}
            <span>
              Become a Volunteer{" "}
              <IoIosArrowRoundForward style={{ fontSize: "35px" }} />
            </span>
          </button>
          {/* <p onClick={() => navigate("/becomevolunteer")} style={{ color: "white" }}>Become a Volunteer <IoIosArrowRoundForward style={{ fontSize: '35px' }} /></p> */}
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
