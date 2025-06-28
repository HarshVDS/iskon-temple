import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../utils/api";

const Reg = () => {
  const [formData, setFormData] = useState({
    referrerName: '',
    position: '',
    contactNumber: '',
    email: '',
    referrerSignature: '',
    referrerDate: '',
    applicantSignature: '',
    applicantDate: ''
  });

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!token) {
      toast.error("Token not found in URL!");
      return;
    }
    try {
      const response = await api.post("/approval/approve", {
        token,
        referrerName: formData.referrerName,
        referrerPosition: formData.position,
        referrerContact: formData.contactNumber,
        referrerEmail: formData.email
      });

      toast.success("User approved and saved successfully!", {
        onClose: () => navigate("/"),
        autoClose: 2000
      });
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Network error: " + error.message;
      toast.error(errorMsg);
    }
  };

  const headerStyle = {
    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
    padding: '4rem 0'
  };

  const sectionStyle = {
    backgroundColor: '#F5E6D3',
    padding: '4rem 0'
  };

  const orangeInputStyle = {
    backgroundColor: '#FF8C42',
    border: 'none',
    color: 'white',
    fontSize: '1.125rem',
    fontWeight: '500',
    padding: '1rem',
    borderRadius: '0'
  };

  const signatureInputStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '2px solid #6b7280',
    borderRadius: '0',
    padding: '0.75rem 1rem'
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
    border: 'none',
    color: 'white',
    fontWeight: '600',
    padding: '0.75rem 2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease'
  };

  return (
    <>
      <ToastContainer />
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <div>
        {/* Header Section */}
        <div style={headerStyle}>
          <div className="container">
            <div className="text-center text-white">
              <h2 className="display-4 fw-bold mb-4">Disciple Registration</h2>
              <nav className="d-flex justify-content-center align-items-center">
                <a href="#" className="text-white text-decoration-none fs-5 me-2">Home</a>
                <span className="text-white fs-5 me-2">/</span>
                <span className="text-warning fs-5">Disciple Registration</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Form Section */}
        <section style={sectionStyle}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="bg-transparent p-4">
                  
                  {/* Form Header */}
                  <div className="mb-5">
                    <h3 className="display-6 fw-bold text-dark mb-4">
                      Confirmation by Srila Prabhupada Disciple or Authority
                    </h3>
                    <p className="fs-5 text-muted mb-4">
                      To be filled out by a disciple of Srila Prabhupada or an authorized person.
                    </p>
                  </div>

                  {/* Form Fields */}
                  <div className="mb-4">
                    <div className="mb-4">
                      <input
                        type="text"
                        name="referrerName"
                        value={formData.referrerName}
                        onChange={handleInputChange}
                        className="form-control form-control-lg"
                        style={orangeInputStyle}
                        placeholder="Name of Referring Disciple/Authority"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="form-control form-control-lg"
                        style={orangeInputStyle}
                        placeholder="Position/Title"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        className="form-control form-control-lg"
                        style={orangeInputStyle}
                        placeholder="Contact Number"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control form-control-lg"
                        style={orangeInputStyle}
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>

                  {/* Confirmation Statement */}
                  <div className="my-5">
                    <p className="fs-5 fw-bold text-dark mb-2">Confirmation Statement:</p>
                    <p className="fs-6 text-muted lh-base">
                      I, the undersigned, confirm that the above-named individual (Applicant) is known to me as an initiated disciple of HDG Srila Prabhupada and has a genuine need for assistance.
                    </p>
                  </div>

                  {/* Signature Section */}
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <p className="fs-6 text-muted mb-2">Signature of Referrer:</p>
                        <input
                          type="text"
                          name="referrerSignature"
                          value={formData.referrerSignature}
                          onChange={handleInputChange}
                          className="form-control"
                          style={signatureInputStyle}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <p className="fs-6 text-muted mb-2">Date:</p>
                        <input
                          type="date"
                          name="referrerDate"
                          value={formData.referrerDate}
                          onChange={handleInputChange}
                          className="form-control"
                          style={signatureInputStyle}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-4">
                        <p className="fs-6 text-muted mb-2">Applicant's Signature:</p>
                        <input
                          type="text"
                          name="applicantSignature"
                          value={formData.applicantSignature}
                          onChange={handleInputChange}
                          className="form-control"
                          style={signatureInputStyle}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <p className="fs-6 text-muted mb-2">Date:</p>
                        <input
                          type="date"
                          name="applicantDate"
                          value={formData.applicantDate}
                          onChange={handleInputChange}
                          className="form-control"
                          style={signatureInputStyle}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center mt-5">
                    <button
                      onClick={handleSubmit}
                      className="btn btn-lg"
                      style={buttonStyle}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                      }}
                    >
                      Submit Registration
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Reg;