import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

const DiscipleRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    address: "",
    contactNumber: "",
    discipleEmail: "",
    templePresidentEmail: "",
    initiationDate: "",
    initiationName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await api.post("/disciples/register", formData);
      const data = res.data;
      console.log(res.status);
      console.log("Response:", data);
      
      if (res.status === 200 || res.status === 201) {
        toast.success(data.message || "Registration submitted successfully!");
        navigate("/");
        setFormData({
          fullName: "",
          dateOfBirth: "",
          address: "",
          contactNumber: "",
          discipleEmail: "",
          templePresidentEmail: "",
          initiationDate: "",
          initiationName: "",
        });
      } else {
        toast.error(data.message || "Something went wrong.");
      }
  
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error(err.response?.data?.message || "Something went wrong.");
    }
  };
  

  return (
    <div>
      <ToastContainer />   
      <div className="page-title-area bg-1">
        <div className="container">
          <div className="page-title-content">
            <h2>Disciple Registration</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li className="active">Disciple Registration</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="help-people-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-6 p-0">
              <div className="all-help-content" style={{ display: "flex", justifyContent: "center" }}>
                <form
                  className="volunteer-join"
                  onSubmit={handleSubmit}
                  style={{ width: "90%", maxWidth: "700px" }}
                >
                  <div className="volunteer-title">
                    <h3>Disciple Registration Referral Form</h3>
                    <p>To be filled out by the person registering as a disciple.</p>
                  </div>

                  {[
                    { name: "fullName", placeholder: "Full Name", type: "text" },
                    { name: "dateOfBirth", placeholder: "Date of Birth", type: "date" },
                    { name: "address", placeholder: "Address", type: "text" },
                    { name: "contactNumber", placeholder: "Contact Number", type: "tel" },
                    { name: "discipleEmail", placeholder: "Email of the Disciple", type: "email" },
                    { name: "templePresidentEmail", placeholder: "Email of the Temple President", type: "email" },
                    { name: "initiationDate", placeholder: "Date of Initiation", type: "date" },
                    { name: "initiationName", placeholder: "Name Given at Initiation", type: "text" },
                  ].map((input) => (
                    <div key={input.name} className="form-group" style={{ marginBottom: "1rem" }}>
                      <input
                        type={input.type}
                        className="form-control"
                        name={input.name}
                        placeholder={input.placeholder}
                        value={formData[input.name]}
                        onChange={handleChange}
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
                  ))}

                  <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <button
                      type="submit"
                      style={{
                        padding: ".5rem 2rem",
                        backgroundColor: "#261FB3",
                        color: "white",
                        borderRadius: "10px",
                        border: "none",
                        fontSize: "1rem",
                        cursor: "pointer",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscipleRegistration;
