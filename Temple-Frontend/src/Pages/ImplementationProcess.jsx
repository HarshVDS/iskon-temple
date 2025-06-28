import React,{useState}from 'react'

import prabhupadaneed from '../assets/imgs/need assistent.jpg'
import pabhupadaestablish from '../assets/imgs/establish program.webp'
import prabhupadadatabase from '../assets/imgs/prabhupada database.avif'
import prabhupadapromation from '../assets/imgs/prabhupada promotion.jpg'
import prabhupadaevaluate from '../assets/imgs/prabhupada evaluate.jpg'
import prabhupadacollaboration from '../assets/imgs/collaboration.jpg'



const ImplementationProcess = () => {
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
  const [more, setMore] = useState(false);
  const [more2, setMore2] = useState(false);
  const [more3, setMore3] = useState(false);

  const handleClick = () => setMore(!more);
  const handleClick2 = () => setMore2(!more2);
  const handleClick3 = () => setMore3(!more3);

  
  return (
    <div>
    <div className="page-title-area bg-1">
                <div className="container">
                    <div className="page-title-content"> 
                        <h2>Implementation Process</h2>
                        <ul>
                            <li>
                                <a href="index.html">
                                    Home
                                </a>
                            </li>
                            <li className="active">Implementation Process</li>
                        </ul>
                    </div>
                </div>
            </div>
       <section className="causes-area pb-70" style={{marginTop:'2rem'}}>
        <div className="container">
          <div className="section-title">
           
            <h2>Implementation Process of Srila Prabhupada Disciples Care Program</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6"  >
              <div className="single-causes-box">
                <img src={prabhupadaneed} alt="Image" />
                <div style={{ height: "auto " }} className="single-causes-content">
                  <h3>
                    <a href="">Needs Assessment
                    </a>
                  </h3>
                  <p>Conduct a comprehensive needs assessment to understand the healthcare, financial and emotional needs of Srila Prabhupada disciples through
                  </p>
                  <div>
                    <button onClick={handleClick} style={{ display: more ? 'none' : 'block', backgroundColor: '#f99115', padding: '.5rem', color: '#fff', borderRadius: '.5rem' }} >
                      Read More...
                    </button>
                    {more && (
                      <div>
                        <ul style={{ textAlign: 'left' }}>
                          <li>Gather data through surveys;</li>
                          <li>Interviews;</li>
                          <li>focus groups;</li>
                          <li>consultations with Srila Prabhupada disciples;</li>
                          <li>caregivers; and</li>
                          <li>community members.</li>
                        </ul>
                        <button onClick={handleClick} style={{ backgroundColor: '#f99115', padding: '.5rem', color: '#fff', borderRadius: '.5rem' }} >Read Less..</button>
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
                    <a href="causes-details-2.html">Establish Program Infrastructure
                    </a>
                  </h3>
                  <p> Initially, we can develop infrastructure for the program based on need assessment</p>
                  <button onClick={handleClick2} style={{ display: more2 ? 'none' : 'block', backgroundColor: '#f99115', 
                  padding: '.5rem', color: '#fff', borderRadius: '.5rem', marginTop:'3.4rem' }} >
                    Read More...
                  </button>
                  {more2 && (
                    <div>
                      <ul style={{ textAlign: 'left' }}>
                        <li>Designate roles and responsibilities for team members, including program coordinators, volunteers, and support staff. </li>
                        <li>Establish healthcare coordination services to assist disciples in accessing medical care, treatments, and support services.</li>
                        <li>Identify fund raising avenues such as patrons retreat, crowd funding platforms.</li>
                        <li>consultations with Srila Prabhupada disciples;</li>
                        <li>Create housing assistance programs to help disciples find suitable living arrangements, including options for relocating to sacred pilgrimage sites.</li>
                      </ul>
                      <button onClick={handleClick2} style={{ backgroundColor: '#f99115', padding: '.5rem', color: '#fff', borderRadius: '.5rem' }} >Read Less..
                      </button>
                    </div>

                  )}

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={prabhupadadatabase} alt="Image" />
                <div style={{ height: "auto" }} className="single-causes-content">
                  <h3>
                    <a href="">Database
                    </a>
                  </h3>
                  <p>Create database of key stakeholders in the program:
                  </p>
                  <button onClick={handleClick3} style={{ display: more3 ? 'none' : 'block', backgroundColor: '#f99115', padding: '.5rem',
                   color: '#fff', borderRadius: '.5rem',marginTop:'6.5rem' }} >
                    Read More...
                  </button>
                  {more3 && (
                  <div>
                    <ul style={{ textAlign: 'left' }}>
                      <li>Designate roles and responsibilities for team members, including program coordinators, volunteers, and support staff. </li>
                      <li>Establish healthcare coordination services to assist disciples in accessing medical care, treatments, and support services.</li>
                      <li>Identify fund raising avenues such as patrons retreat, crowd funding platforms.</li>
                      <li>consultations with Srila Prabhupada disciples;</li>
                      <li>Create housing assistance programs to help disciples find suitable living arrangements, including options for relocating to sacred pilgrimage sites.</li>
                    </ul>
                    <button onClick={handleClick3} style={{ backgroundColor: '#f99115', padding: '.5rem', color: '#fff', borderRadius: '.5rem' }} >Read Less..
                    </button>
                  </div>
                )}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={prabhupadacollaboration} alt="Image" />
                <div style={{ height: "auto" }} className="single-causes-content">
                  <h3>
                    <a href="">Build Partnerships and Collaborations
                    </a>
                  </h3>
                  <p>"Create synergies with devotee care departments, healthcare facilities like Bahktivedanta Hospital, and the Bhakti Vedanta Medical Association network for collaboration."
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={prabhupadapromation} alt="Image" />
                <div style={{height:'auto'}} className="single-causes-content">
                  <h3>
                    <a href="">Launch and Promotion
                    </a>
                  </h3>
                  <p>"Launch Srila Prabhupada Disciple Care Program with coordinated outreach via websites, social media, temple announcements, and community events."
                  </p>
            
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={prabhupadaevaluate} alt="Image" />
                <div style={{ height: "auto" }} className="single-causes-content">
                  <h3>
                    <a href="">Monitor and Evaluate
                    </a>
                  </h3>
                  <p>Establish monitoring and evaluation mechanisms to track program progress, outputs, and outcomes. Annually present the achievements to GBC members.
                  </p>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="volunteer-join-area volunteer-join-area-page ptb-100">
        <div className="container">
          <form className="volunteer-join">
            <div className="volunteer-title">
              <h2>Host Registration Form</h2>
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
                  />
                </div>
              </div>
              
              <div className="col-12">
                <div className="form-group">
                  <select
                    className="form-control"
                    id="Country"
                    style={{ color: "#fff" }}
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
                  />
                </div>
              </div>
              <div className="col-12 availability ">
                <div className="form-group">
              
                  <select
                    className="form-control"
                    id="Country"
                    style={{ backgroundColor: "#F99115", color: "#fff" }}
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
                        backgroundColor: "#F99115",
                        color: "#fff",
                        cursor: "pointer",
                        textAlign: "left",
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
              <div className="col-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Address"
                    placeholder="how many devotees they can host"
                  />
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
                <input type="checkbox" id="consent" name="consent" required />
                <label for="consent">
                  I agree to the terms and conditions and understand the
                  responsibilities of volunteering.
                </label>
              </div>
            </div>
            <div style={{ textAlign: "left" }}>
              <button
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
            </div>
          </form>
        </div>
      </section> */}
    </div>
  )
}

export default ImplementationProcess
