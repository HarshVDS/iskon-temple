import React, { useEffect, useState } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../utils/api';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [disciples, setDisciples] = useState([]);
  const [pending, setPending] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [activeTab, setActiveTab] = useState("users");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [editRow, setEditRow] = useState(null);
  const [editData, setEditData] = useState({});
  const [deleteRow, setDeleteRow] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (!token) return navigate("/login");

    const userData = JSON.parse(user || "{}");
    if (!userData?.isAdmin) return navigate("/");

    setIsAdmin(true);
    fetchAll();
    setLoading(false);
  }, []);

  useEffect(() => {
    setPage(1); 
  }, [filterText, activeTab]);

  const headers = { Authorization: `Bearer ${token}` };

  const fetchAll = async () => {
    try {
      const [u, d, p, v] = await Promise.all([
        api.get("/admin/users"),
        api.get("/admin/disciples"),
        api.get("/admin/pending-disciples"),
        api.get("/admin/volunteers"),
      ]);
      setUsers(u.data);
      setDisciples(d.data);
      setPending(p.data);
      setVolunteers(v.data);
    } catch (err) {
      console.error("Admin data fetch error:", err);
    }
  };

  const filterData = (data) =>
    data.filter((item) =>
      Object.values(item).some((val) =>
        val?.toString().toLowerCase().includes(filterText.toLowerCase())
      )
    );

  const formatDate = (value, onlyDate = false) => {
    if (!value) return value;
    const date = new Date(value);
    if (isNaN(date.getTime())) return value;
    if (onlyDate) {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } else {
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    }
  };

  const isDateField = (key, value) => {
    const dateKeywords = ['date', 'time', 'created', 'updated', 'joined', 'registered', 'birth', 'dob'];
    const isDateKeyword = dateKeywords.some(keyword => key.toLowerCase().includes(keyword));
    if (isDateKeyword) return true;
    if (typeof value === 'string') {
      const date = new Date(value);
      return !isNaN(date.getTime());
    }
    return false;
  };

  const handleSave = async () => {
    let endpoint = "";
    let id = editData._id || editData.id;
    let payload = { ...editData };
    try {
      if (activeTab === "users") {
        if (editRow.isAdmin) {
          toast.error("You cannot edit admin data!", { autoClose: 2000, className: 'shake-error' });
          setShowEditModal(false);
          return;
        }
        endpoint = `/admin/users/${id}`;
        if (editRow.isAdmin !== payload.isAdmin && payload.isAdmin) {
          toast.error("Admin cannot promote user to admin.", { autoClose: 2000, className: 'shake-error' });
          return;
        }
        delete payload.password;
      } else if (activeTab === "disciples") {
        endpoint = `/admin/disciples/${id}`;
        if (editRow.isApproved !== payload.isApproved && payload.isApproved) {
          toast.error("Admin cannot approve disciples.", { autoClose: 2000, className: 'shake-error' });
          return;
        }
      } else if (activeTab === "volunteers") {
        endpoint = `/admin/volunteers/${id}`;
      } else {
        toast.error("Editing not allowed for this type.", { autoClose: 2000, className: 'shake-error' });
        return;
      }
      await api.put(endpoint, payload);
      setShowEditModal(false);
      toast.success("Entry updated successfully!", { autoClose: 2000 });
      fetchAll();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update entry.", { autoClose: 2000, className: 'shake-error' });
    }
  };

  const handleDelete = async () => {
    let endpoint = "";
    let id = deleteRow._id || deleteRow.id;
    try {
      if (activeTab === "users") {
        if (deleteRow.isAdmin) {
          toast.error("You cannot delete admin data!", { autoClose: 2000, className: 'shake-error' });
          setShowDeleteModal(false);
          return;
        }
        endpoint = `/admin/users/${id}`;
      } else if (activeTab === "disciples") {
        endpoint = `/admin/disciples/${id}`;
      } else if (activeTab === "volunteers") {
        endpoint = `/admin/volunteers/${id}`;
      } else if (activeTab === "pending") {
        endpoint = `/admin/pending-disciples/${id}`;
      } else {
        toast.error("Delete not allowed for this type.", { autoClose: 2000, className: 'shake-error' });
        return;
      }
      await api.delete(endpoint);
      setShowDeleteModal(false);
      toast.error("Entry deleted successfully!", { autoClose: 2000,className: 'shake-error'  });
      fetchAll();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete entry.", { autoClose: 2000, className: 'shake-error' });
    }
  };

  const renderTable = (data) => {
    if (!data || data.length === 0) return <p>No data available.</p>;

    let keys = Object.keys(data[0]).filter((key) => key !== "__v");
    const idKey = keys.find((k) => k === "id" || k === "_id");
    if (idKey) {
      keys = keys.filter((k) => k !== idKey);
      keys.push(idKey);
    }

    const filtered = filterData(data);
    const total = filtered.length;
    const isFullList = pageSize === filtered.length;
    const totalPages = isFullList ? 1 : Math.ceil(total / pageSize);
    const paginated = isFullList ? filtered : filtered.slice((page - 1) * pageSize, page * pageSize);

    return (
      <div>
        <h2 className="text-xl font-semibold mb-3 text-gray-800">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} List
        </h2>
        <div className="overflow-auto max-h-[70vh] border rounded-lg shadow-sm bg-white">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-primary text-dark position-sticky top-0 zindex-dropdown">
              <tr>
                {keys.map((key) => (
                  <th key={key} className="px-3 py-2 border-bottom border-dark text-capitalize">
                    {key}
                  </th>
                ))}
                <th className="px-3 py-2 border-bottom border-dark">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((row, idx) => (
                <tr
                  key={idx}
                  className={((isFullList ? idx : (page - 1) * pageSize + idx) % 2 === 0 ? "bg-gray-50" : "bg-white")}
                >
                  {keys.map((key) => {
                    const val = row[key];
                    let displayVal;
        
                    if (typeof val === "boolean") {
                      displayVal = val ? "✅ Yes" : "❌ No";
                    } else if (
                      key === "dateOfBirth" ||
                      key === "dob" ||
                      key === "initiationDate"
                    ) {
                      displayVal = formatDate(val, true);
                    } else if (isDateField(key, val)) {
                      displayVal = formatDate(val, false);
                    } else if (key === "referrer" && val && typeof val === "object") {
                      displayVal = (
                        <div style={{lineHeight: '1.5'}}>
                          {val.name && <div><span style={{fontWeight:600}}>Name:</span> {val.name}</div>}
                          {val.position && <div><span style={{fontWeight:600}}>Position:</span> {val.position}</div>}
                          {val.contact && <div><span style={{fontWeight:600}}>Contact:</span> {val.contact}</div>}
                          {val.email && <div><span style={{fontWeight:600}}>Email:</span> {val.email}</div>}
                        </div>
                      );
                    } else if (typeof val === "string" && val.length > 25) {
                      displayVal = `${val.slice(0, 12)}...`;
                    } else {
                      displayVal = val?.toString();
                    }
        
                    return (
                      <td key={key} className="px-4 py-2 border text-xs break-all">
                        {displayVal}
                      </td>
                    );
                  })}
                <td className="px-4 py-2 border text-xs">
                  <div className="d-flex align-items-center gap-2">
                    {activeTab !== "pending" && (
                      <button
                        className="btn d-flex justify-content-center align-items-center p-2"
                        style={{ width: '40px', height: '40px' }}
                        onClick={() => {
                          setEditRow(row);
                          setEditData(row);
                          setShowEditModal(true);
                        }}
                        title="Edit"
                      >
                        <FontAwesomeIcon icon={faPenToSquare} className="fs-5" />
                      </button>
                    )}
                    <button
                      className="btn  d-flex justify-content-center align-items-center p-2"
                      style={{ width: '40px', height: '40px' }}
                      onClick={() => {
                        setDeleteRow(row);
                        setShowDeleteModal(true);
                      }}
                      title="Delete"
                    >
                      <FontAwesomeIcon icon={faTrash} className="fs-5" />
                    </button>
                  </div>
                </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-between mt-3 gap-2">
          <div className="d-flex align-items-center gap-2">
            <span>Rows per page:</span>
            <select
              className="form-select form-select-sm w-auto"
              value={pageSize}
              onChange={e => setPageSize(Number(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
              <option value={200}>200</option>
              <option value={filtered.length}>Full List</option>
            </select>
          </div>
          {!isFullList && (
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Prev
              </button>
              <span>
                Page {page} of {totalPages}
              </span>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages || totalPages === 0}
              >
                Next
              </button>
            </div>
          )}
          <div className="text-muted small">
            Showing {total === 0 ? 0 : (isFullList ? 1 : (page - 1) * pageSize + 1)}
            -{Math.min(isFullList ? total : page * pageSize, total)} of {total}
          </div>
        </div>
        {showEditModal && (
          <div className="modal d-block" tabIndex="-1" style={{background: 'rgba(0,0,0,0.3)'}}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Entry</h5>
                  <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
                </div>
                <div className="modal-body">
                  {Object.keys(editData).map((key) => {
                    const value = editData[key];
                    
                    // Handle referrer object specially
                    if (key === "referrer" && value && typeof value === "object") {
                      return (
                        <div className="mb-3" key={key}>
                          <label className="form-label fw-bold text-capitalize">{key}</label>
                          <div className="border rounded p-3 bg-light">
                            <div className="row">
                              <div className="col-md-6 mb-2">
                                <label className="form-label small">Name</label>
                                <input
                                  className="form-control"
                                  value={value.name || ''}
                                  onChange={e => setEditData({ 
                                    ...editData, 
                                    [key]: { ...value, name: e.target.value }
                                  })}
                                />
                              </div>
                              <div className="col-md-6 mb-2">
                                <label className="form-label small">Position</label>
                                <input
                                  className="form-control"
                                  value={value.position || ''}
                                  onChange={e => setEditData({ 
                                    ...editData, 
                                    [key]: { ...value, position: e.target.value }
                                  })}
                                />
                              </div>
                              <div className="col-md-6 mb-2">
                                <label className="form-label small">Contact</label>
                                <input
                                  className="form-control"
                                  value={value.contact || ''}
                                  onChange={e => setEditData({ 
                                    ...editData, 
                                    [key]: { ...value, contact: e.target.value }
                                  })}
                                />
                              </div>
                              <div className="col-md-6 mb-2">
                                <label className="form-label small">Email</label>
                                <input
                                  className="form-control"
                                  value={value.email || ''}
                                  onChange={e => setEditData({ 
                                    ...editData, 
                                    [key]: { ...value, email: e.target.value }
                                  })}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    
                    // Handle boolean values
                    if (typeof value === "boolean") {
                      return (
                        <div className="mb-2" key={key}>
                          <label className="form-label text-capitalize">{key}</label>
                          <select
                            className="form-control"
                            value={value.toString()}
                            onChange={e => setEditData({ ...editData, [key]: e.target.value === 'true' })}
                            disabled={
                              key === '_id' || key === 'id' ||
                              (activeTab === 'users' && key === 'isAdmin') ||
                              (activeTab === 'disciples' && key === 'isApproved')
                            }
                          >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                          </select>
                        </div>
                      );
                    }
                    
                    // Handle date fields
                    if (isDateField(key, value)) {
                      return (
                        <div className="mb-2" key={key}>
                          <label className="form-label text-capitalize">{key}</label>
                          <input
                            type="datetime-local"
                            className="form-control"
                            value={value ? new Date(value).toISOString().slice(0, 16) : ''}
                            onChange={e => setEditData({ ...editData, [key]: e.target.value })}
                            disabled={key === '_id' || key === 'id'}
                          />
                        </div>
                      );
                    }
                    
                    // Handle regular fields
                    return (
                      <div className="mb-2" key={key}>
                        <label className="form-label text-capitalize">{key}</label>
                        <input
                          className="form-control"
                          value={value ?? ''}
                          onChange={e => setEditData({ ...editData, [key]: e.target.value })}
                          disabled={
                            key === '_id' || key === 'id' ||
                            (activeTab === 'users' && key === 'isAdmin') ||
                            (activeTab === 'disciples' && key === 'isApproved')
                          }
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setShowEditModal(false)}>Cancel</button>
                  <button className="btn btn-primary" onClick={handleSave}>Save</button>
                </div>
              </div>
            </div>
          </div>
        )}
        {showDeleteModal && (
          <div className="modal d-block" tabIndex="-1" style={{background: 'rgba(0,0,0,0.3)'}}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirm Delete</h5>
                  <button type="button" className="btn-close" onClick={() => setShowDeleteModal(false)}></button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to delete this entry?</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>Cancel</button>
                  <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const dataMap = { users, disciples, pending, volunteers };

  return (
    <div className="container-fluid px-3 py-4">
      <ToastContainer position="top-center" />
      {loading ? (
        <div className="text-center text-lg font-medium">Loading...</div>
      ) : !isAdmin ? (
        <div className="text-center text-danger">
          <h2 className="h4 fw-bold">Access Denied</h2>
          <p>You are not authorized to view this page.</p>
        </div>
      ) : (
        <>
          <div className="row align-items-start gy-3 mb-4">
            <div className="col-12 col-lg-3">
              <h1 className="h3 fw-bold text-primary">🛡️ Admin Dashboard</h1>
            </div>

            <div className="col-12 col-lg-6">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {Object.keys(dataMap).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`btn px-4 py-2 fw-semibold border ${
                      activeTab === tab
                        ? "btn-primary text-white shadow-sm"
                        : "btn-outline-secondary text-dark"
                    }`}
                    style={{
                      borderRadius: '30px',
                      transition: 'all 0.2s ease-in-out',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className="d-flex flex-column gap-2 align-items-lg-end align-items-center">
                <div className="input-group" style={{ maxWidth: "250px", width: "100%" }}>
                  <input
                    type="text"
                    placeholder="🔍 Search anything..."
                    className="form-control"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                  />
                </div>
                <CSVLink
                  filename={`${activeTab}-data.csv`}
                  data={filterData(dataMap[activeTab])}
                  className="btn btn-success w-50 w-md-auto text-nowrap"
                >
                  📥 Download Data
                </CSVLink>
              </div>
            </div>
          </div>

          <div className="table-responsive">
            {renderTable(dataMap[activeTab])}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;


