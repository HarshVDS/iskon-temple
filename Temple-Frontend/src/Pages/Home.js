import React, { useRef, useEffect, useState } from "react";

import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GiHealthNormal } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { GiTeamIdea } from "react-icons/gi";
import homemain from "../assets/img/banner/banner-bg-shape-1.png";
import prabhupada1 from "../assets/imgs/prabhupada.jpeg";
import prabhupadacare from "../assets/imgs/srila prabhupada care img.jpg";
import prabhupadamission from "../assets/imgs/bhagavad-gita-16-05-by-srila-pra.jpg";
import prabhupadavision from "../assets/imgs/need assistent.jpg";
import haridas from "../assets/imgs/Mens-Executive-Health-Check-up-over-40-scaled.webp";
import mahavarahdas from "../assets/imgs/Dollarphotoclub_64980674.jpg";
import vaikunthpatidas from "../assets/imgs/0c0331d5-3931-4f33-9.jpg";
import srivarajbhumidas from "../assets/imgs/bd10d13320d7d7f49afcf5371c54e917.jpg";
import prabhupadaneed from "../assets/imgs/need assistent.jpg";
import pabhupadaestablish from "../assets/imgs/establish program.webp";
import prabhupadadatabase from "../assets/imgs/prabhupada database.avif";
import prabhupadapromation from "../assets/imgs/prabhupada promotion.jpg";
import prabhupadaevaluate from "../assets/imgs/prabhupada evaluate.jpg";
import prabhupadacollaboration from "../assets/imgs/collaboration.jpg";
import prabhupadastory1 from "../assets/imgs/Prabhupada-iskcon.jpg";
import prabhupadastory2 from "../assets/imgs/prabhupada story2.jpg";
import prabhupadastory3 from "../assets/imgs/prabhupada story3.jpg";
import prabhupadastory4 from "../assets/imgs/prabhupada story4.jpg";
import prabhupadastory5 from "../assets/imgs/prabhupada story5.jpg";
import donner1 from "../assets/imgs/donner1.webp";
import donner2 from "../assets/imgs/donner2.webp";
import donner3 from "../assets/imgs/donner3.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import Accordion, { AccordionSlots } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import bannervideo from "../assets/img/banner/bannerVideo.mp4";

const Home = () => {
  const [more, setMore] = useState(false);
  const [more2, setMore2] = useState(false);
  const [more3, setMore3] = useState(false);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const handleClick = () => {
    setMore(!more);
  };
  const handleClick2 = () => {
    setMore2(!more2);
  };
  const handleClick3 = () => {
    setMore3(!more3);
  };

  const featuresData = [
    {
      icon: <FaIndianRupeeSign />,
      title: "Financial Assistance",
      description:
        "Offer financial assistance programs or fundraising support to help cover medical expenses, housing costs, and other essential needs for Srila Prabhupada's disciples.",
    },
    {
      icon: <GiHealthNormal />,
      title: "Healthcare Coordination",
      description:
        "Provide assistance in identifying medical doctors and post-treatment care to ensure that disciples receive the necessary healthcare support.",
    },
    {
      icon: <RiTeamFill />,
      title: "Emotional and Spiritual Support",
      description:
        "Offer emotional support services to address the unique challenges and needs of Srila Prabhupada's disciples as they age.",
    },
    {
      icon: <FaUserDoctor />,
      title: "Comprehensive Health Assessments",
      description:
        "Explore the possibility to offer regular health check-ups and assessments to identify any medical needs or concerns among Srila Prabhupada's disciples.",
    },
    {
      icon: <RiTeamFill />,
      title: "Community Building Activities",
      description:
        "Organize retreats and events specifically for Srila Prabhupada's disciples so they can share the pastimes of Srila Prabhupada and their realizations with the next generations.",
    },
    {
      icon: <GiTeamIdea />,
      title: "Relocation Assistance",
      description:
        "Provide assistance with housing options, including affordable housing arrangements and support for disciples who wish to relocate to sacred pilgrimage sites like Vrindavan, Mayapur, or other Dhams in India.",
    },
    {
      icon: <GiTeamIdea />, // Replace with appropriate icon
      title: "Advocacy and Outreach",
      description:
        "Raise awareness about the needs of Srila Prabhupada's disciples and the importance of supporting elderly devotees within ISKCON. It could be a small gesture such as announcing their appearance days or initiation anniversaries.",
    },
    {
      icon: <GiTeamIdea />, // Replace with appropriate icon
      title: "Volunteer Opportunities",
      description:
        "Provide opportunities for volunteers to contribute their time, skills, and resources to support Srila Prabhupada's disciples, whether through caregiving, companionship, or other forms of assistance.",
    },
  ];
  const teamMembers = [
    {
      name: "Glims Bond",
      imageSrc: donner1,
      donationAmount: "$256",
    },
    {
      name: "Sharlok Bin",
      imageSrc: donner2,
      donationAmount: "$256",
    },
    {
      name: "Pristly Hearbart",
      imageSrc: donner3,
      donationAmount: "$420",
    },
    {
      name: "Glims Bond",
      imageSrc: donner1,
      donationAmount: "$256",
    },
    {
      name: "Sharlok Bin",
      imageSrc: donner2,
      donationAmount: "$256",
    },
    {
      name: "Pristly Hearbart",
      imageSrc: donner3,
      donationAmount: "$420",
    },
  ];
  const volunteers = [
    {
      name: "Glims Bond",
      imageSrc: donner1,
    },
    {
      name: "Sharlok Bin",
      imageSrc: donner2,
    },
    {
      name: "Pristly Hearbart",
      imageSrc: donner3,
    },
    {
      name: "Glims Bond",
      imageSrc: donner1,
    },
    {
      name: "Sharlok Bin",
      imageSrc: donner2,
    },
    {
      name: "Pristly Hearbart",
      imageSrc: donner3,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      question: "In which state do you work most in Africa ?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How to donate on our site using your form ?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How to become a volunteer in Zambia state ?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How can I give my clothes and other products ?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How to become a volunteer in Zambia state ?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How to donate on our site using your form ?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  const navigate = useNavigate();

  const [showList, setShowList] = useState(false);
  const [muted,setMuted]=useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleButtonClick = () => {
    setShowList((prevShowList) => !prevShowList); // Toggle the list visibility
  };

  const videoRef = useRef(null);



  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.muted = muted; 
        videoRef.current.play().catch((error) => {
          console.log("Autoplay Blocked:", error);
        });
      }
    };

    playVideo();


    document.addEventListener("click", playVideo);

    return () => {
      document.removeEventListener("click", playVideo);
    };
  }, [muted]);

const toggleMute=()=>{
  if(videoRef.current){
    videoRef.current.muted=!videoRef.current.muted
    setMuted(videoRef.current.muted)
  }
}


   const [selectedOptions, setSelectedOptions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [otherText, setOtherText] = useState("");
    const [showOtherInput, setShowOtherInput] = useState(false);
  
    const options = [
      "Financial Assistance",
      "Medical/health practitioner",
      "Emotional and Spiritual Support",
      "Comprehensive Health Assessments",
      "Community Building Activities",
      "Relocation Assistance",
      "Other",
    ];
  
    const handleOptionClick = (option) => {
      let newSelectedOptions = [...selectedOptions];
  
      if (newSelectedOptions.includes(option)) {
        newSelectedOptions = newSelectedOptions.filter((item) => item !== option);
      } else {
        newSelectedOptions.push(option);
      }
  
      setSelectedOptions(newSelectedOptions);
  
      if (newSelectedOptions.includes("Other")) {
        setShowOtherInput(true);
      } else {
        setShowOtherInput(false);
        setOtherText(""); // Reset input when "Other" is deselected
      }
    };

  return (
    <div>
      <div className="sidebar-modal">
        <div className="sidebar-modal-inner">
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <img src="assets/img/logo.png" alt="Image" />
            </div>
            <span className="close-btn sidebar-modal-close-btn">
              <i className="bx bx-x" />
            </span>
          </div>
          <div className="sidebar-about">
            <div className="title">
              <p>
                Tians is a high quality video production house. We make a
                awesome branded videos. It is the analogical of film making, but
                the images are digitally recorded instead of film stock.
              </p>
            </div>
          </div>
          <div className="contact-us">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className="bx bx-location-plus" />
                6890 Blvd, The Bronx, NY 1058 New York, USA
              </li>
              <li>
                <i className="bx bx-envelope" />
                <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#6c04090000032c18050d021f420f0301">
                  <span
                    className="__cf_email__"
                    data-cfemail="a8c0cdc4c4c7e8dcc1c9c6db86cbc7c5"
                  >
                    [email&nbsp;protected]
                  </span>
                </a>
                <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#d3babdb5bc93a7bab2bda0fdb0bcbe">
                  <span
                    className="__cf_email__"
                    data-cfemail="bfd6d1d9d0ffcbd6ded1cc91dcd0d2"
                  >
                    [email&nbsp;protected]
                  </span>
                </a>
              </li>
              <li>
                <i className="bx bx-phone-call" />
                <a href="tel:+1-(123)-456-7899">+1 (123) 456 7899</a>
                <a href="tel:+1-(514)-312-6688">+1 (514) 312-6688</a>
              </li>
            </ul>
          </div>
          <div className="sidebar-gallery-feed">
            <h3>Gallery</h3>
            <ul>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-1.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-2.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-3.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-4.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-5.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-6.jpg" alt="image" />
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-follow-us">
            <h3>Sidebar Follow</h3>
            <ul className="social-wrap">
              <li>
                <a href="#" target="_blank">
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="bx bxl-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
       <section className="banner-area" style={{backgroundColor:"transparent"}}>
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="banner-content">
                  <h1 className="wow animate__animated animate__fadeInDown" data-wow-delay="1s">
                    Srila Prabhupada Disciples Care Program
                  </h1>
                  <p className="wow animate__animated animate__fadeInLeft" data-wow-delay="1s">
                    Without the devotees, what would I do? I am simply sitting here alone.
                    My Guru Maharaj ordered me to accomplish this mission, and without
                    the help of my disciples, how could I do it? Therefore, they are all my
                    heart and soul. I am very much indebted to all my disciples.
                    <br />
                    —Srila Prabhupada (Letter to HH Jayapataka Swami, 24th October 1976)
                  </p>
                  <div className="banner-btn wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        handleButtonClick();
                      }}
                      href="#"
                      className="default-btn"
                    >
                      <span>How to get involved</span>
                    </a>
                    {/* Render the list conditionally */}
                    {showList && (
                      <ul className="involvement-list">
                        <li onClick={() => navigate("/discipleRegistration")}>SP Disciple</li>
                        <li onClick={() => navigate("/Volunteer")}>Become a Volunteer</li>
                        <li onClick={() => navigate("/donation")}>Donation</li>
                        <li onClick={() => navigate("/implementationProcess")}>Become a host</li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
               
                  {/* Image or Additional Content Can Go Here */}
                  <button
      onClick={toggleMute}
      style={{
        position: "absolute", // make it fixed instead of absolute
        bottom: isMobile ? "140px" : "80px", // raised to avoid overlapping
        right: isMobile ? "16px" : "30px",
        background: "rgba(0, 0, 0, 0.6)",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: isMobile ? "40px" : "45px",
        height: isMobile ? "40px" : "45px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: isMobile ? "18px" : "20px",
        cursor: "pointer",
        zIndex: 1000,
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
      }}
    >
      {muted ? <FaVolumeMute /> : <FaVolumeUp />}
    </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-bg-shape-1" style={{backgroundColor:"transperent"}}>
        <video
        preload="auto"
          ref={videoRef}
          src={bannervideo}
          autoPlay 
          loop
          muted={muted}

          playsInline
          style={{ width: "100%", opacity: ".8" }}
          className="videobanner"
        />
      
      </div>
    </section>
      <section className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img
                  src={prabhupadacare}
                  alt="Image"
                  style={{ borderRadius: "15px" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">About</span>
                <h2>Introduction to Srila Prabhupada Disciples Care Program</h2>
                <p style={{ fontSize: "18px" }}>
                  inspired by HH Jayapataka Swami and HH GopalKrishna Maharaja
                </p>
                <div className="row">
                  <div className="col-lg-12">
                    <ul style={{ display: "flex" }}>
                      <li>
                        {/* <i className="bx bx-check" /> */}
                        <button
                        onClick={()=>navigate("/Team")}
                          style={{
                            padding: ".5rem 1rem",
                            backgroundColor: "#f99115",
                            color: "white",
                            borderRadius: "10px",
                          }}
                        >
                          {" "}
                          <span>Meet the team</span>
                        </button>
                      </li>
                      <li>
                        {/* <i className="bx bx-check" /> */}
                        <button
                        onClick={()=>navigate("/Volunteer")}
                          style={{
                            padding: ".5rem 1rem",
                            backgroundColor: "#f99115",
                            color: "white",
                            borderRadius: "10px",
                          }}
                        >
                          {" "}
                          <span>Meet the volunteers</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bx bx-check" />
                        <span>Volunteers</span>
                      </li>
                      <li>
                        <i className="bx bx-check" />
                        <span>Team</span>
                      </li>
                    </ul>
                  </div> */}
                </div>
                {/* <a onClick={() => navigate("/aboutus")} href="" className="default-btn">
                  <span>About Us</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-area pt-100 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                {/* <span className="top-title">About</span> */}
                <h2>Vision & Mission</h2>
                <p>
                  To honor the lifelong dedication and service of Srila
                  Prabhupada's disciples by providing compassionate care and
                  support as they age to lead a life with dignity and purpose in
                  their later years.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                <img
                  src={prabhupadamission}
                  alt="Image"
                  style={{ borderRadius: "2rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src={prabhupadavision} alt="Image" style={{ borderRadius: '2rem' }} />


              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
               
                <h2>Vision of Srila Prabhupada Disciples Care Program</h2>
                <p>To honor the lifelong dedication and service of Srila Prabhupada's disciples by providing compassionate care and support as they age to lead a life with dignity and purpose in their later years.

                </p>

              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="what-we-do-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Key Features of Srila Prabhupada Disciples Care Program</h2>
          </div>
          <div className="row">
            {featuresData.map((feature, index) => (
              <div key={index} className="col-lg-3 col-sm-6">
                <div className="single-we-box overly-outside">
                  <div style={{ height: "65vh" }} className="overly-inside">
                    <i>{feature.icon}</i>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="causes-area pb-70">
        <div className="container">
          <div className="section-title">
            {/* <span>What The Causes</span> */}
            <h2>
              Implementation Process of Srila Prabhupada Disciples Care Program
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-causes-box">
                <img src={prabhupadaneed} alt="Image" />
                <div
                  style={{ height: "auto " }}
                  className="single-causes-content"
                >
                  <h3>
                    <a href="">Needs Assessment</a>
                  </h3>
                  <p>
                    Conduct a comprehensive needs assessment to understand the
                    healthcare, financial and emotional needs of Srila
                    Prabhupada disciples through
                  </p>
                  <div>
                    <button
                      onClick={handleClick}
                      style={{
                        display: more ? "none" : "block",
                        backgroundColor: "#f99115",
                        padding: ".5rem",
                        color: "#fff",
                        borderRadius: ".5rem",
                      }}
                    >
                      Read More...
                    </button>
                    {more && (
                      <div>
                        <ul style={{ textAlign: "left" }}>
                          <li>Gather data through surveys;</li>
                          <li>Interviews;</li>
                          <li>focus groups;</li>
                          <li>
                            consultations with Srila Prabhupada disciples;
                          </li>
                          <li>caregivers; and</li>
                          <li>community members.</li>
                        </ul>
                        <button
                          onClick={handleClick}
                          style={{
                            backgroundColor: "#f99115",
                            padding: ".5rem",
                            color: "#fff",
                            borderRadius: ".5rem",
                          }}
                        >
                          Read Less..
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-causes-box">
                <img src={pabhupadaestablish} alt="Image" />
                <div className="single-causes-content">
                  <h3>
                    <a href="causes-details-2.html">
                      Establish Program Infrastructure
                    </a>
                  </h3>
                  <p>
                    {" "}
                    Initially, we can develop infrastructure for the program
                    based on need assessment
                  </p>
                  <button
                    onClick={handleClick2}
                    style={{
                      display: more2 ? "none" : "block",
                      backgroundColor: "#f99115",
                      padding: ".5rem",
                      color: "#fff",
                      borderRadius: ".5rem",
                      marginTop: "3.4rem",
                    }}
                  >
                    Read More...
                  </button>
                  {more2 && (
                    <div>
                      <ul style={{ textAlign: "left" }}>
                        <li>
                          Designate roles and responsibilities for team members,
                          including program coordinators, volunteers, and
                          support staff.{" "}
                        </li>
                        <li>
                          Establish healthcare coordination services to assist
                          disciples in accessing medical care, treatments, and
                          support services.
                        </li>
                        <li>
                          Identify fund raising avenues such as patrons retreat,
                          crowd funding platforms.
                        </li>
                        <li>consultations with Srila Prabhupada disciples;</li>
                        <li>
                          Create housing assistance programs to help disciples
                          find suitable living arrangements, including options
                          for relocating to sacred pilgrimage sites.
                        </li>
                      </ul>
                      <button
                        onClick={handleClick2}
                        style={{
                          backgroundColor: "#f99115",
                          padding: ".5rem",
                          color: "#fff",
                          borderRadius: ".5rem",
                        }}
                      >
                        Read Less..
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={prabhupadadatabase} alt="Image" />
                <div
                  style={{ height: "auto" }}
                  className="single-causes-content"
                >
                  <h3>
                    <a href="">Database</a>
                  </h3>
                  <p>Create database of key stakeholders in the program:</p>
                  <button
                    onClick={handleClick3}
                    style={{
                      display: more3 ? "none" : "block",
                      backgroundColor: "#f99115",
                      padding: ".5rem",
                      color: "#fff",
                      borderRadius: ".5rem",
                      marginTop: "6.5rem",
                    }}
                  >
                    Read More...
                  </button>
                  {more3 && (
                    <div>
                      <ul style={{ textAlign: "left" }}>
                        <li>
                          Designate roles and responsibilities for team members,
                          including program coordinators, volunteers, and
                          support staff.{" "}
                        </li>
                        <li>
                          Establish healthcare coordination services to assist
                          disciples in accessing medical care, treatments, and
                          support services.
                        </li>
                        <li>
                          Identify fund raising avenues such as patrons retreat,
                          crowd funding platforms.
                        </li>
                        <li>consultations with Srila Prabhupada disciples;</li>
                        <li>
                          Create housing assistance programs to help disciples
                          find suitable living arrangements, including options
                          for relocating to sacred pilgrimage sites.
                        </li>
                      </ul>
                      <button
                        onClick={handleClick3}
                        style={{
                          backgroundColor: "#f99115",
                          padding: ".5rem",
                          color: "#fff",
                          borderRadius: ".5rem",
                        }}
                      >
                        Read Less..
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={prabhupadacollaboration} alt="Image" />
                <div
                  style={{ height: "auto" }}
                  className="single-causes-content"
                >
                  <h3>
                    <a href="">Build Partnerships and Collaborations</a>
                  </h3>
                  <p>
                    "Create synergies with devotee care departments, healthcare
                    facilities like Bahktivedanta Hospital, and the Bhakti
                    Vedanta Medical Association network for collaboration."
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={prabhupadapromation} alt="Image" />
                <div
                  style={{ height: "auto" }}
                  className="single-causes-content"
                >
                  <h3>
                    <a href="">Launch and Promotion</a>
                  </h3>
                  <p>
                    "Launch Srila Prabhupada Disciple Care Program with
                    coordinated outreach via websites, social media, temple
                    announcements, and community events."
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={prabhupadaevaluate} alt="Image" />
                <div
                  style={{ height: "auto" }}
                  className="single-causes-content"
                >
                  <h3>
                    <a href="">Monitor and Evaluate</a>
                  </h3>
                  <p>
                    Establish monitoring and evaluation mechanisms to track
                    program progress, outputs, and outcomes. Annually present
                    the achievements to GBC members.
                  </p>
                  {/* <div className="all-skill-bar">
                    <div className="skill-bar" data-percentage="95%">
                      <h4 className="progress-title-holder">
                        <span className="progress-title">$1900000 Raised Of $160000</span>
                        <span className="progress-number-mark">
                          <span className="percent" />
                          <span className="down-arrow" />
                        </span>
                      </h4>
                      <div className="progress-content-outter">
                        <div className="progress-content" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="default-btn">
                    <span>Donate Now</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Behind The Donors Of</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              perferendis facilis! Magni explicabo nam velit nulla officiis
              dolorum? Ducimus illum
            </p>
          </div>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div className="single-team">
                  <div className="team-img">
                    <img src={member.imageSrc} alt="Image" />
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
                    <span>Donate {member.donationAmount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
          <div style={{textAlign:'center'}}>
            <button onClick={() => navigate("/donation")} style={{padding:'.5rem 1rem',backgroundColor:'#f99115',color:'white',borderRadius:'10px'}}>     <span>Become a Donor{" "}
            <IoIosArrowRoundForward style={{ fontSize: "35px" }} /></span></button>
            </div>
        
      </section>
      <section className="help-people-area">
        <div className="container-fluid">
          <div className="section-title">
            {/* <span>What The Causes</span> */}
            <h2 style={{ paddingBlock: "2rem" }}>
              Success Stories of Srila Prabhupada Disciples Care Program
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 " style={{ padding: "5rem" }}>
              {/* <div className="people-img-one jarallax" data-jarallax="{&quot;speed&quot;: 0.3}"  /> */}
              <div className="people-img-one jarallax">
                <img src={prabhupadastory1} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="all-help-content">
                <div className="people-content">
                  <h2>Establishment of ISKCON</h2>
                  <p>
                    {" "}
                    Perhaps the most remarkable success story of Srila
                    Prabhupada is the establishment of ISKCON itself. In 1966,
                    at the age of 70, he arrived in New York City with just a
                    few dollars and a trunk of books. Despite facing numerous
                    challenges and setbacks, he tirelessly spread the teachings
                    of Bhagavad Gita and the practice of Krishna consciousness.
                    His dedication and perseverance led to the rapid growth of
                    ISKCON, which has now become a global spiritual movement
                    with millions of followers worldwide.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="all-help-content">
                <div className="people-content">
                  <h2>Writing and Publishing</h2>
                  <p>
                    {" "}
                    Srila Prabhupada translated and wrote commentaries on
                    numerous Vedic scriptures, including the Bhagavad Gita,
                    Srimad Bhagavatam, and Caitanya Caritamrita. His
                    translations and commentaries are widely regarded for their
                    clarity and depth, and they continue to inspire millions of
                    people around the world. He also established the
                    Bhaktivedanta Book Trust (BBT) to publish and distribute his
                    books, which have been translated into dozens of languages
                    and distributed in millions of copies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 " style={{ padding: "5rem" }}>
              {/* <div className="people-img-two jarallax" data-jarallax="{&quot;speed&quot;: 0.3}" /> */}
              <div className="people-img-one jarallax">
                <img src={prabhupadastory2} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 " style={{ padding: "5rem" }}>
              {/* <div className="people-img-one jarallax" data-jarallax="{&quot;speed&quot;: 0.3}" /> */}
              <div className="people-img-one jarallax">
                <img src={prabhupadastory3} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="all-help-content">
                <div className="people-content">
                  <h2>Temple Establishments</h2>
                  <p>
                    Srila Prabhupada oversaw the establishment of numerous
                    temples and ashrams around the world, where devotees could
                    practice Krishna consciousness and engage in devotional
                    activities. The most famous of these is the Krishna Balaram
                    Mandir in Vrindavan, India, and the ISKCON temple in
                    Mayapur, West Bengal, which is the headquarters of ISKCON
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="all-help-content">
                <div className="people-content">
                  <h2>Food Distribution</h2>
                  <p>
                    {" "}
                    Srila Prabhupada initiated the distribution of prasadam
                    (sanctified food offered to Krishna) as a means of
                    alleviating hunger and poverty. ISKCON's food distribution
                    programs, such as the Hare Krishna Food for Life, have
                    served millions of free meals to the needy around the world,
                    regardless of race, religion, or nationality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 " style={{ padding: "5rem" }}>
              {/* <div className="people-img-two jarallax" data-jarallax="{&quot;speed&quot;: 0.3}" /> */}
              <div className="people-img-one jarallax">
                <img src={prabhupadastory4} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 " style={{ padding: "5rem" }}>
              {/* <div className="people-img-one jarallax" data-jarallax="{&quot;speed&quot;: 0.3}" /> */}
              <div className="people-img-one jarallax">
                <img src={prabhupadastory5} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="all-help-content">
                <div className="people-content">
                  <h2>Cultural Influence </h2>
                  <p>
                    {" "}
                    Srila Prabhupada's teachings and the Hare Krishna movement
                    have had a significant cultural influence, especially in the
                    West. The chanting of the Hare Krishna mantra, popularized
                    by ISKCON, became a prominent feature of the counterculture
                    movement of the 1960s and 1970s. Today, the Hare Krishna
                    mantra continues to be sung and practiced by people of
                    various backgrounds as a means of spiritual upliftment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="causes-area pb-70">
        <div className="container">
          <div className="section-title">
            {/* <span>What The Causes</span> */}
            <h2>Meet the Sevakas</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-causes-box">
                <img src={haridas} alt="Image" style={{ height: "20rem" }} />
                <div className="single-causes-content">
                  <h3>
                    <a href="">HG Braj Hari Das</a>
                  </h3>
                  <p>
                    Brajhari Das joined in ISKCON at BHUBANESHWAR in June 1984.
                    He met HH Jayapataka Swami who sent him to Hyderabad .
                    Latter on he took Intiation from HH Jayapataka Swami in
                    1985. He came to Juhu temple for training and since then he
                    has been rendering service in the temple.. He was leading
                    the book distribution of ISKCON Juhu, then General manager,
                    Vice President and President of the temple for last 20 years
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single-causes-box">
                <img
                  src={mahavarahdas}
                  alt="Image"
                  style={{ height: "20rem" }}
                />
                <div className="single-causes-content">
                  <h3>
                    <a href="causes-details-2.html">HG Mahavaraha Das</a>
                  </h3>
                  <p>
                    Mahavaraha prabhu joined ISKCON 26 years ago in Malaysia. He
                    is disciple of HH Jayapataka Swami. Immediately after he had
                    become a devotee, he immediately got the chance to do
                    personal service to his guru maharaj. Since guru maharaj had
                    the stroke, for every single moment, every single day, for
                    the past so many years, he has been with his guru maharaj.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img
                  src={vaikunthpatidas}
                  alt="Image"
                  style={{ height: "20rem" }}
                />
                <div className="single-causes-content">
                  <h3>
                    <a href="causes-details-2.html">HG Vaikunthapati Das</a>
                  </h3>
                  <p>
                    Chartered Accountant by qualification and has held very
                    senior positions in Mumbai & Middle East. Disciple of HH
                    Jaypataka Swami Maharaja initiated in 1993 and founder of
                    Krishna Katha Desh Yatra in Middle East and currently
                    developing a community in Wadala, Mumbai. He has developed a
                    strong community of devotees who closely knitted and are
                    engaged in reading Srila Prabhupa’s books and spreading the
                    movement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img
                  src={srivarajbhumidas}
                  alt="Image"
                  style={{ height: "20rem" }}
                />
                <div className="single-causes-content">
                  <h3>
                    <a href="causes-details-2.html">HG Vaikunthapati Das</a>
                  </h3>
                  <p>
                    Chartered Accountant by qualification and has held very
                    senior positions in Mumbai & Middle East. Disciple of HH
                    Jaypataka Swami Maharaja initiated in 1993 and founder of
                    Krishna Katha Desh Yatra in Middle East and currently
                    developing a community in Wadala, Mumbai. He has developed a
                    strong community of devotees who closely knitted and are
                    engaged in reading Srila Prabhupa’s books and spreading the
                    movement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Volunteers</h2>
          </div>
          <div className="row">
            {volunteers.map((volunteer, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div className="single-team">
                  <div className="team-img">
                    <img src={volunteer.imageSrc} alt="Image" />
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
                    <h3>{volunteer.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
       
        <div style={{textAlign:'center'}}>
            <button onClick={() => navigate("/becomevolunteer")} style={{padding:'.5rem 1rem',backgroundColor:'#f99115',color:'white',borderRadius:'10px'}}>     <span>Become a Volunteer{" "}
            <IoIosArrowRoundForward style={{ fontSize: "35px" }} /></span></button>
            </div>
      </section>
      {/* <section className="volunteer-join-area volunteer-join-area-page ptb-100">
        <div className="container">
          <form className="volunteer-join">
            <div className="volunteer-title">
              <h2>Join Our Volunteer Group For Serve Helpless</h2>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <input type="text" className="form-control" id="First-Name" placeholder="Name" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input type="email" className="form-control" id="Email" placeholder="Email" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input type="text" className="form-control" id="Number" placeholder="Phone" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input type="text" className="form-control" id="Address" placeholder="Address" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <textarea name="message" className="form-control" id="Message" cols={30} rows={5} placeholder="Message" defaultValue={""} />
                </div>
              </div>
            </div>
            <button type="submit" className="default-btn">
              <span>Submit</span>
            </button>
          </form>
        </div>
      </section> */}
      {/* <section className="volunteer-join-area volunteer-join-area-page ptb-100">
        <div className="container">
          <form className="volunteer-join">
            <div className="volunteer-title">
              <h2>Volunteer Registration Form</h2>
              <p style={{ marginTop: "2rem", textAlign: "center" }}>
                Thank you for your willingness to serve Srila Prabhupada’s
                disciples. Please fill out the form below to indicate your
                interest and the areas where you’d like to contribute.
              </p>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="First-Name"
                    placeholder="Name"
                    style={{
                          color: "#fff",
                          backgroundColor: "orange",
                          border: "1px solid #fff",
                          padding: "10px",
                          width: "100%",
                          borderRadius: "5px",
                        }}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    placeholder="Email"
                    style={{
                          color: "#fff",
                          backgroundColor: "orange",
                          border: "1px solid #fff",
                          padding: "10px",
                          width: "100%",
                          borderRadius: "5px",
                        }}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Number"
                    placeholder="Phone"
                    style={{
                          color: "#fff",
                          backgroundColor: "orange",
                          border: "1px solid #fff",
                          padding: "10px",
                          width: "100%",
                          borderRadius: "5px",
                        }}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Address"
                    placeholder="Address"
                    style={{
                          color: "#fff",
                          backgroundColor: "orange",
                          border: "1px solid #fff",
                          padding: "10px",
                          width: "100%",
                          borderRadius: "5px",
                        }}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <select
                    className="form-control"
                    id="Country"
                    // style={{ color: "#fff" }}
                    style={{
                          color: "#fff",
                          backgroundColor: "orange",
                          border: "1px solid #fff",
                          padding: "10px",
                          width: "100%",
                          borderRadius: "5px",
                        }}
                  >
                    <option value="">Select Country</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cabo Verde">Cabo Verde</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo (Congo-Brazzaville)">
                      Congo (Congo-Brazzaville)
                    </option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Eswatini">Eswatini</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Greece">Greece</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, North">Korea, North</option>
                    <option value="Korea, South">Korea, South</option>
                    <option value="Kosovo">Kosovo</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Laos">Laos</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia">Micronesia</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar (Burma)">Myanmar (Burma)</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="North Macedonia">North Macedonia</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestine">Palestine</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russia</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Vincent and the Grenadines">
                      Saint Vincent and the Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syria</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-Leste">Timor-Leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Vatican City">Vatican City</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Address"
                    placeholder="Nearest ISKCON Center"
                    style={{
                          color: "#fff",
                          backgroundColor: "orange",
                          border: "1px solid #fff",
                          padding: "10px",
                          width: "100%",
                          borderRadius: "5px",
                        }}
                  />
                </div>
              </div>
              <div className="col-12 availability ">
                <div className="form-group">
               
                  <select
                    className="form-control"
                    id="Country"
                    // style={{ backgroundColor: "#F99115", color: "#fff" }}
                    style={{
                          color: "#fff",
                          backgroundColor: "orange",
                          border: "1px solid #fff",
                          padding: "10px",
                          width: "100%",
                          borderRadius: "5px",
                        }}
                  >
                    <option value="">Availability</option>
                    <option value="5-10 hours/week">5-10 hours/week</option>
                    <option value="10-20 hours/week">10-20 hours/week</option>
                    <option value="20+ hours/week">20+ hours/week</option>
                  </select>
                </div>
              </div>
             
              <div className="col-12">
                <div className="form-group">
                  <div className="custom-dropdown">
                    <div
                      className="form-control"
                      style={{
                          color: "#fff",
                          backgroundColor: "orange",
                          border: "1px solid #fff",
                          padding: "10px",
                          width: "100%",
                          borderRadius: "5px",
                          textAlign:"left",
                        }}
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      {selectedOptions.length > 0
                        ? selectedOptions.join(", ")
                        : "Areas of Interest"}
                    </div>

                    {showDropdown && (
                      <div
                        className="dropdown-options"
                        style={{
                          backgroundColor: "#F99115",
                          padding: "10px",
                          borderRadius: "5px",
                          textAlign: "left",
                        }}
                      >
                        {options.map((option, index) => (
                          <div
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            style={{
                              padding: "5px",
                              cursor: "pointer",
                              color: "#fff",
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={selectedOptions.includes(option)}
                              readOnly
                            />
                            <span style={{ marginLeft: "5px" }}>{option}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {showOtherInput && (
                      <input
                        type="text"
                        placeholder="Please specify"
                        className="form-control mt-2"
                        style={{ backgroundColor: "#fff", color: "#000" }}
                        value={otherText}
                        onChange={(e) => setOtherText(e.target.value)}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: "left" }}>
                <label for="experience">
                  Do you have any relevant experience in the selected areas?
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  required
                  style={{
                    width: "100%",
                    background: "rgb(228, 193, 151)",
                    border: "1.5px solid #F99115",
                  }}
                ></textarea>
              </div>
              <div style={{ textAlign: "left" }}>
                <label for="motivation">
                  Why do you want to volunteer for this service?
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  required
                  style={{
                    width: "100%",
                    background: "rgb(228, 193, 151)",
                    border: "1.5px solid #F99115",
                  }}
                ></textarea>
              </div>
              <div style={{ textAlign: "left" }}>
                <label for="skills">
                  Do you have any specific skills (e.g., healthcare, event
                  planning, counseling)?
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  required
                  style={{
                    width: "100%",
                    background: "rgb(228, 193, 151)",
                    border: "1.5px solid #F99115",
                  }}
                ></textarea>
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "1rem",
                  textAlign: "left",
                }}
              >
                <input type="checkbox" style={{marginBottom:"36px", marginRight:"2px"}} id="consent" name="consent" required />
                <label for="consent">
                  I agree to the terms and conditions and understand the
                  responsibilities of volunteering.
                </label>
              </div>
            </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
  <button
    style={{
      padding: ".5rem 1rem",
      backgroundColor: "#261FB3",
      color: "white",
      marginTop: "5px",
      borderRadius: "10px",
      border: "none", // optional, for a cleaner look
      cursor: "pointer", // optional, for better UX
    }}
  >
    <span>Submit</span>
  </button>
</div>

          </form>
        </div>
      </section> */}


    
    </div>
  );
};

export default Home;
