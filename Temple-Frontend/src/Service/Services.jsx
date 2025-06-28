import React from 'react'

import { FaIndianRupeeSign } from "react-icons/fa6";
import { GiHealthNormal } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { GiTeamIdea } from "react-icons/gi";

const Services = () => {
  const featuresData = [
    {
      icon: <FaIndianRupeeSign />,
      title: "Financial Assistance",
      description: "Offer financial assistance programs or fundraising support to help cover medical expenses, housing costs, and other essential needs for Srila Prabhupada's disciples."
    },
    {
      icon: <GiHealthNormal />,
      title: "Healthcare Coordination",
      description: "Provide assistance in identifying medical doctors and post-treatment care to ensure that disciples receive the necessary healthcare support."
    },
    {
      icon: <RiTeamFill />,
      title: "Emotional and Spiritual Support",
      description: "Offer emotional support services to address the unique challenges and needs of Srila Prabhupada's disciples as they age."
    },
    {
      icon: <FaUserDoctor />,
      title: "Comprehensive Health Assessments",
      description: "Explore the possibility to offer regular health check-ups and assessments to identify any medical needs or concerns among Srila Prabhupada's disciples."
    },
    {
      icon: <RiTeamFill />,
      title: "Community Building Activities",
      description: "Organize retreats and events specifically for Srila Prabhupada's disciples so they can share the pastimes of Srila Prabhupada and their realizations with the next generations."
    },
    {
      icon: <GiTeamIdea />,
      title: "Relocation Assistance",
      description: "Provide assistance with housing options, including affordable housing arrangements and support for disciples who wish to relocate to sacred pilgrimage sites like Vrindavan, Mayapur, or other Dhams in India."
    },
    {
      icon: <GiTeamIdea />, // Replace with appropriate icon
      title: "Advocacy and Outreach",
      description: "Raise awareness about the needs of Srila Prabhupada's disciples and the importance of supporting elderly devotees within ISKCON. It could be a small gesture such as announcing their appearance days or initiation anniversaries."
    },
    {
      icon: <GiTeamIdea />, // Replace with appropriate icon
      title: "Volunteer Opportunities",
      description: "Provide opportunities for volunteers to contribute their time, skills, and resources to support Srila Prabhupada's disciples, whether through caregiving, companionship, or other forms of assistance."
    }
  ];
  return (
    <div>

  <div className="page-title-area bg-14">
    <div className="container">
      <div className="page-title-content">
        <h2>Key feature</h2>
        <ul>
          <li>
            <a href="index.html">
              Home
            </a>
          </li>
          <li className="active">Key feature</li>
        </ul>
      </div>
    </div>
  </div>
  <section className="what-we-do-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Key Features of Srila Prabhupada Disciples Care Program</h2>
          </div>
          <div className="row">
            {featuresData.map((feature, index) => (
              <div key={index} className="col-lg-3 col-sm-6">
                <div className="single-we-box overly-outside">
                  <div style={{ height: '65vh' }} className="overly-inside">
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
</div>

  )
}

export default Services
