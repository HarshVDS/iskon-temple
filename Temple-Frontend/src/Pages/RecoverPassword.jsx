// import React from 'react'

// const RecoverPassword = () => {
//   return (
//    <div>
//   <div className="sidebar-modal">
//     <div className="sidebar-modal-inner">
//       <div className="sidebar-header">
//         <div className="sidebar-logo">
//           <img src="assets/img/logo.png" alt="Image" />
//         </div>
//         <span className="close-btn sidebar-modal-close-btn">
//           <i className="bx bx-x" />
//         </span>
//       </div>
//       <div className="sidebar-about">
//         <div className="title">
//           <p>Tians is a high quality video production house. We make a awesome branded videos. It is the analogical of film making, but the images are digitally recorded instead of film stock.</p>
//         </div>
//       </div>
//       <div className="contact-us">
//         <h3>Contact Us</h3>
//         <ul>
//           <li>
//             <i className="bx bx-location-plus" />
//             6890 Blvd, The Bronx, NY 1058 New York, USA
//           </li>
//           <li>
//             <i className="bx bx-envelope" />
//             <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#ee868b828281ae9a878f809dc08d8183"><span className="__cf_email__" data-cfemail="4d25282121220d39242c233e632e2220">[email&nbsp;protected]</span></a>
//             <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#127b7c747d52667b737c613c717d7f"><span className="__cf_email__" data-cfemail="375e59515877435e5659441954585a">[email&nbsp;protected]</span></a>
//           </li>
//           <li>
//             <i className="bx bx-phone-call" />
//             <a href="tel:+1-(123)-456-7899">+1 (123) 456 7899</a>
//             <a href="tel:+1-(514)-312-6688">+1 (514) 312-6688</a>
//           </li>
//         </ul>
//       </div>
//       <div className="sidebar-gallery-feed">
//         <h3>Gallery</h3>
//         <ul>
//           <li>
//             <a href="#">
//               <img src="assets/img/gallery/gallery-1.jpg" alt="image" />
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <img src="assets/img/gallery/gallery-2.jpg" alt="image" />
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <img src="assets/img/gallery/gallery-3.jpg" alt="image" />
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <img src="assets/img/gallery/gallery-4.jpg" alt="image" />
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <img src="assets/img/gallery/gallery-5.jpg" alt="image" />
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <img src="assets/img/gallery/gallery-6.jpg" alt="image" />
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div className="sidebar-follow-us">
//         <h3>Sidebar Follow</h3>
//         <ul className="social-wrap">
//           <li>
//             <a href="#" target="_blank">
//               <i className="bx bxl-twitter" />
//             </a>
//           </li>
//           <li>
//             <a href="#" target="_blank">
//               <i className="bx bxl-instagram" />
//             </a>
//           </li>
//           <li>
//             <a href="#" target="_blank">
//               <i className="bx bxl-facebook" />
//             </a>
//           </li>
//           <li>
//             <a href="#" target="_blank">
//               <i className="bx bxl-youtube" />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
//   <div className="page-title-area bg-8">
//     <div className="container">
//       <div className="page-title-content">
//         <h2>Recover Password</h2>
//         <ul>
//           <li>
//             <a href="index.html">
//               Home
//             </a>
//           </li>
//           <li className="active">Recover Password</li>
//         </ul>
//       </div>
//     </div>
//   </div>
//   <section className="user-area-style recover-password-area ptb-100">
//     <div className="container">
//       <div className="contact-form-action recover">
//         <div className="form-heading text-center">
//           <h3 className="form-title">Reset Password!</h3>
//           <p className="reset-desc">Enter the email of your account to reset the password. Then you will receive a link to email to reset the password. If you have any issue about reset password <a href="contact-us.html">Contact Us.</a></p>
//         </div>
//         <form method="post">
//           <div className="row">
//             <div className="col-12">
//               <div className="form-group">
//                 <input className="form-control" type="text" name="name" placeholder="Enter Email Address" />
//               </div>
//             </div>
//             <div className="col-lg-6 col-sm-6">
//               <a className="now-log-in font-q" href="log-in.html">Log in your account</a>
//             </div>
//             <div className="col-lg-6 col-sm-6">
//               <p className="now-register">
//                 Not a member?
//                 <a className="font-q" href="register.html">Register</a>
//               </p>
//             </div>
//             <div className="col-12 text-center">
//               <button className="default-btn" type="submit">
//                 <span>Reset password</span>
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   </section>
// </div>

//   )
// }

// export default RecoverPassword


// ForgotPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post(`/users/forgot-password`, { email });
      toast.success(res.data.message || "Password reset link sent!");
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="page-title-area bg-8">
        <div className="container">
          <div className="page-title-content">
            <h2>Recover Password</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="active">Recover Password</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="user-area-style recover-password-area ptb-100">
        <div className="container">
          <div className="contact-form-action recover">
            <div className="form-heading text-center">
              <h3 className="form-title">Reset Password!</h3>
              <p className="reset-desc">Enter the email of your account to reset the password. Then you will receive a link to email to reset the password.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <input 
                      className="form-control" 
                      type="email" 
                      placeholder="Enter Email Address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <a className="now-log-in font-q" href="/login">Log in your account</a>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <p className="now-register">
                    Not a member?
                    <a className="font-q" href="/register">Register</a>
                  </p>
                </div>
                <div className="col-12 text-center">
                  <button className="default-btn" type="submit" disabled={loading}>
                    <span>{loading ? 'Sending...' : 'Reset password'}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;