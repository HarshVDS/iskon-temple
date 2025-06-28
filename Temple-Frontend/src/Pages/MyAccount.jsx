import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';
import defaultAvatar from '../assets/img/logo.png';
import logo from '../assets/imgs/logo.png';

const MyAccount = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get('/users/me');
        setUser(res.data);
      } catch (err) {
        setError('You must be logged in to view your account.');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('authChanged'));
    navigate('/login');
  };

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    setPasswordError('');
    setPasswordSuccess('');
    setPasswordLoading(false);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');
    if (newPassword !== confirmNewPassword) {
      setPasswordError('New passwords do not match.');
      return;
    }
    setPasswordLoading(true);
    try {
      const res = await api.post('/users/change-password', {
        currentPassword,
        newPassword,
      });
      setPasswordSuccess(res.data.message);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } catch (err) {
      setPasswordError(err.response?.data?.message || 'Failed to change password.');
    } finally {
      setPasswordLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container text-center" style={{ padding: '100px 0' }}>
        <div className="spinner-border text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center" style={{ padding: '100px 0' }}>
        <div className="alert alert-danger">{error}</div>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/login')}>Go to Login</button>
      </div>
    );
  }

  return (
    <div>
      <div className="page-title-area bg-5">
        <div className="container">
          <div className="page-title-content">
            <h2>My Account</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li className="active">My Account</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="user-area-style ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10">
              <div className="contact-form-action" style={{ boxShadow: '0 0 20px 3px rgba(0,0,0,0.07)' }}>
                <div className="account-title text-center mb-4">
                <img className='mobile-logo' style={{ width: "80px", marginTop: '1rem' }} src={logo} alt="logo" />
                  {/* <img src={defaultAvatar} alt="Avatar" style={{ width: 90, borderRadius: '50%', marginBottom: 10 }} /> */}
                  <h2 style={{ marginBottom: 0 }}>{user.fullName || 'User'}</h2>
                  <p className="text-muted" style={{ marginBottom: 0 }}>{user.email}</p>
                </div>
                <hr />
                <div className="row mb-3">
                  <div className="col-6">
                    <strong>Mobile:</strong>
                  </div>
                  <div className="col-6 text-right">
                    {user.mobile || <span className="text-muted">Not set</span>}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <strong>Address:</strong>
                  </div>
                  <div className="col-6 text-right">
                    {user.address || <span className="text-muted">Not set</span>}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <strong>Registration Date:</strong>
                  </div>
                  <div className="col-6 text-right">
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : <span className="text-muted">-</span>}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <strong>User ID:</strong>
                  </div>
                  <div className="col-6 text-right">
                    <span style={{ fontSize: '0.95em', wordBreak: 'break-all' }}>{user._id}</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <button className="btn btn-outline-primary" onClick={handleEdit}>
                    <i className="bx bx-edit-alt"></i> Edit Profile / Change Password
                  </button>
                  <button className="btn btn-danger" onClick={handleLogout}>
                    <i className="bx bx-log-out"></i> Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Change Password Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.4)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Change Password</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <form onSubmit={handleChangePassword}>
                <div className="modal-body">
                  {passwordError && <div className="alert alert-danger">{passwordError}</div>}
                  {passwordSuccess && <div className="alert alert-success">{passwordSuccess}</div>}
                  <div className="form-group">
                    <label>Current Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={currentPassword}
                      onChange={e => setCurrentPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={newPassword}
                      onChange={e => setNewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={confirmNewPassword}
                      onChange={e => setConfirmNewPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                  <button type="submit" className="btn btn-primary" disabled={passwordLoading}>
                    {passwordLoading ? 'Changing...' : 'Change Password'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
