import React, { useState } from "react";

const Host = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [otherText, setOtherText] = useState("");
  const [showOtherInput, setShowOtherInput] = useState(false);

  const [showDropdown2, setShowDropdown2] = useState(false);
  const [selectedDurations, setSelectedDurations] = useState([]);

  const [showDropdown3, setShowDropdown3] = useState(false);
const [selectedFacilities, setSelectedFacilities] = useState([]);
const [facilityOther, setFacilityOther] = useState("");

const facilityOptions = [
  "Lift/Wheelchair Access",
  "Doctor Nearby",
  "Nearby ISKCON Temple",
  "Daily Prasadam Service",
  "Wifi/Communication",
  "Other",
];

const handleFacilityClick = (option) => {
  if (selectedFacilities.includes(option)) {
    setSelectedFacilities((prev) => prev.filter((item) => item !== option));
  } else {
    setSelectedFacilities((prev) => [...prev, option]);
  }
};


  const durationOptions = [
    "Short Term (up to 1 week)",
    "Medium Term (1–3 weeks)",
    "Long Term (More than 1 month)",
  ];

  const handleDurationClick = (option) => {
    if (selectedDurations.includes(option)) {
      setSelectedDurations((prev) => prev.filter((item) => item !== option));
    } else {
      setSelectedDurations((prev) => [...prev, option]);
    }
  };

  const options = [
    "Private Room",
    "Shared Room",
    "Guest House Facility",
    "Others (please Specify)",
  ];
 

  const handleOptionClick = (option) => {
    let newSelectedOptions = [...selectedOptions];

    if (newSelectedOptions.includes(option)) {
      newSelectedOptions = newSelectedOptions.filter((item) => item !== option);
    } else {
      newSelectedOptions.push(option);
    }

    setSelectedOptions(newSelectedOptions);

    if (newSelectedOptions.includes("Others (please Specify)")) {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
      setOtherText(""); // Reset input when "Other" is deselected
    }
  };

  return (
    <>
      <div className="page-title-area bg-1">
        <div className="container">
          <div className="page-title-content">
            <h2>Become a Host</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Become a Host</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="volunteer-join-area volunteer-join-area-page ptb-100">
        <div className="container">
          <form className="volunteer-join">
            <div className="volunteer-title">
              <h2>Host Registration Form</h2>
              <p style={{ marginTop: "2rem", textAlign: "center" }}>
                Serve Srila Prabhupada’s Disciples by Opening Your Heart and
                Home.
              
                    We invite you to extend your hospitality and service by offering
                shelter, care, and association to Srila Prabhupada’s disciples.
              </p>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="First-Name"
                    placeholder="Full Name"
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
                    id="initaitedName"
                    placeholder="Initiated Name (if any)"
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
                    placeholder="Contact Number"
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
                    id="email"
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
              {/* <div className="col-12 availability ">
                <div className="form-group">
                  <label for="availability" className="form-group" >Availability:</label>
                  <select
                    className="form-control"
                    id="Country"
                    style={{ backgroundColor: "#F99115", color: "#fff" }}
                  >
                    <option value="">Availability</option>
                    <option value="5-10 hours/week">
                      {" "}
                      Short Term (up to 1 week)
                    </option>
                    <option value="10-20 hours/week">
                      Medium Term (1–3 weeks)
                    </option>
                    <option value="20+ hours/week">
                      {" "}
                      Long Term (More than 1 month)
                    </option>
                  </select>
                </div>
              </div> */}



              {/* <div className='col-12' >
                <div className="form-group">
                  
                  <select className="form-control" id="Country" style={{ backgroundColor: '#F99115', color: '#fff' }}>
                    <option value="">Preferred Mode of Service</option>
                    <option value="5-10 hours/week"><input type="radio" id="remote" name="modeOfService" value="Remote" required />
                      <label for="remote">Remote</label></option>
                    <option value="10-20 hours/week"><input type="radio" id="inPerson" name="modeOfService" value="In-Person" required />
                      <label for="inPerson">In-Person</label></option>

                  </select>
                </div>
              </div> */}
              {/* <div className="col-12">
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
              </div> */}

              <div className="col-12">
                <div className="form-group">
                  <div className="custom-dropdown">
                    <div
                      className="form-control"
                      style={{
                        backgroundColor: "orange",
                        color: "#fff",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      {selectedOptions.length > 0
                        ? selectedOptions.join(", ")
                        : "Type of Accommodation Available"}
                    </div>

                    {showDropdown && (
                      <div
                        className="dropdown-options"
                        style={{
                          backgroundColor: "orange",
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
                        // style={{ backgroundColor: "#fff", color: "#000" }}
                        style={{
                          color: "#fff",
                          backgroundColor: "orange",
                          border: "1px solid #fff",
                          padding: "10px",
                          width: "100%",
                          borderRadius: "5px",
                        }}
                        value={otherText}
                        onChange={(e) => setOtherText(e.target.value)}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <div className="custom-dropdown">
                    <div
                      className="form-control"
                      style={{
                        backgroundColor: "orange",
                        color: "#fff",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                      onClick={() => setShowDropdown2(!showDropdown2)}
                    >
                      {selectedDurations.length > 0
                        ? selectedDurations.join(", ")
                        : "Availability Duration:"}
                    </div>

                    {showDropdown2 && (
                      <div
                        className="dropdown-options"
                        style={{
                          backgroundColor: "orange",
                          padding: "10px",
                          borderRadius: "5px",
                          textAlign: "left",
                        }}
                      >
                        {durationOptions.map((option, index) => (
                          <div
                            key={index}
                            onClick={() => handleDurationClick(option)}
                            style={{
                              padding: "5px",
                              cursor: "pointer",
                              color: "#fff",
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={selectedDurations.includes(option)}
                              readOnly
                            />
                            <span style={{ marginLeft: "5px" }}>{option}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <div className="custom-dropdown">
                    <div
                      className="form-control"
                      style={{
                        backgroundColor: "orange",
                        color: "#fff",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                      onClick={() => setShowDropdown3(!showDropdown3)}
                    >
                      {selectedFacilities.length > 0
                        ? selectedFacilities.join(", ")
                        : "Special Facilities Available:"}
                    </div>

                    {showDropdown3 && (
                      <div
                        className="dropdown-options"
                        style={{
                          backgroundColor: "orange",
                          padding: "10px",
                          borderRadius: "5px",
                          textAlign: "left",
                        }}
                      >
                        {facilityOptions.map((option, index) => (
                          <div
                            key={index}
                            onClick={() => handleFacilityClick(option)}
                            style={{
                              padding: "5px",
                              cursor: "pointer",
                              color: "#fff",
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={selectedFacilities.includes(option)}
                              readOnly
                            />
                            <span style={{ marginLeft: "5px" }}>{option}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {selectedFacilities.includes("Other") && (
                      <input
                        type="text"
                        placeholder="Please specify"
                        className="form-control mt-2"
                        style={{ backgroundColor: "#fff", color: "#000" }}
                        value={facilityOther}
                        onChange={(e) => setFacilityOther(e.target.value)}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: "left" }}>
                <label for="experience">
                Why Do You Wish to Host a Srila Prabhupada Disciple?
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
              {/* <div style={{ textAlign: "left" }}>
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
              </div> */}
              {/* <div style={{ textAlign: "left" }}>
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
              </div> */}

              <div
                style={{
                  display: "flex",
                  marginTop: "1rem",
                  textAlign: "left",
                }}
              >
                <input type="checkbox" id="consent" name="consent" required />
                <label
                  for="consent"
                  style={{ marginLeft: "10px", marginTop: "57px" }}
                >
                   I understand that hosting a Srila Prabhupada disciple is a sacred service and agree to offer respectful, clean, and supportive accommodation.
                </label>
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "5px",
                  textAlign: "left",
                }}
              >
                <input type="checkbox" id="consent" name="consent" required />
                <label
                  for="consent"
                  style={{ marginLeft: "10px", marginTop: "36px" }}
                >
                     I agree to coordinate with the Disciple Care team and communicate clearly about logistics, preferences, or limitations.
                </label>
              </div>
            </div>
            <div style={{ textAlign: "left" }}>
              <button
                style={{
                  padding: ".5rem 1rem",
                  marginLeft: "190px",
                  marginTop: "20px",
                  backgroundColor: "#261FB3",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                {" "}
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Host;
