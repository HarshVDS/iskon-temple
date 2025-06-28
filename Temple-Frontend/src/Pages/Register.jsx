import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await api.post('/users/register', {
        fullName,
        email,
        mobile,
        password,
      });
      setLoading(false);
      toast.success('User registered successfully! Please login.', {
        onClose: () => navigate('/login'),
        autoClose: 2000
      });
    } catch (err) {
      setLoading(false);
      setError(
        err.response?.data?.message || 'Registration failed. Please try again.'
      );
    }
  };

  return (
    <div>
      <ToastContainer />
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
              <p>Tians is a high quality video production house. We make a awesome branded videos. It is the analogical of film making, but the images are digitally recorded instead of film stock.</p>
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
                <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#c4aca1a8a8ab84b0ada5aab7eaa7aba9"><span className="__cf_email__" data-cfemail="98f0fdf4f4f7d8ecf1f9f6ebb6fbf7f5">[email&nbsp;protected]</span></a>
                <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#274e49414867534e4649540944484a"><span className="__cf_email__" data-cfemail="3d54535b527d49545c534e135e5250">[email&nbsp;protected]</span></a>
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
      <div className="page-title-area bg-7">
        <div className="container">
          <div className="page-title-content">
            <h2>Register</h2>
            <ul>
              <li>
                <a href="index.html">
                  Home
                </a>
              </li>
              <li className="active">Register</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="user-area-style ptb-100">
        <div className="container">
          <div className="contact-form-action">
            <div className="account-title">
              <h2>Registration</h2>
            </div>
            {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label>Full name</label>
                    <input className="form-control" type="text" name="name" value={fullName} onChange={e => setFullName(e.target.value)} required />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Email address</label>
                    <input className="form-control" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Mobile no.</label>
                    <input className="form-control" type="text" name="mobile" value={mobile} onChange={e => setMobile(e.target.value)} required />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />
                  </div>
                </div>
                <div className="col-12">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-6">
                      <button className="default-btn register" type="submit" disabled={loading}>
                        <span>{loading ? 'Registering...' : 'Register now'}</span>
                      </button>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="show">
                        <input id="remember-1" type="checkbox" />
                        <label>Show password ?</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <p>Have an account? <a href="/login">Login now!</a></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
