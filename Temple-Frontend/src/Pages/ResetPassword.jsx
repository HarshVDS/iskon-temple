import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const res = await api.post('/users/reset-password', { token, password });
      toast.success(res.data.message || "Password reset successful!");
      setTimeout(() => navigate('/login'), 3000);
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
            <h2>Reset Password</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="active">Reset Password</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="user-area-style log-in-area ptb-100">
        <div className="container">
          <div className="contact-form-action">
            <div className="account-title">
              <h2>Set New Password</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label>New Password</label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Enter New Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Confirm New Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button className="default-btn" type="submit" disabled={loading}>
                    <span>{loading ? 'Resetting...' : 'Reset Password'}</span>
                  </button>
                </div>
                <div className="col-12">
                  <p>Remember your password? <a href="/login">Login Now!</a></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;
