import User from "../models/userModel.js";
import Disciple from "../models/disciple.js";
import PendingDisciple from "../models/PendingDisciple.js";
import Volunteer from "../models/Volunteer.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

export const getAllVolunteers = async (req, res) => {
  const volunteers = await Volunteer.find();
  res.json(volunteers);
};

export const getAllDisciples = async (req, res) => {
  const disciples = await Disciple.find();
  res.json(disciples);
};

export const getAllPendingDisciples = async (req, res) => {
  const pending = await PendingDisciple.find();
  res.json(pending);
};

// Update User (admin cannot promote to admin)
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const update = { ...req.body };
    // Prevent admin promotion
    if (update.hasOwnProperty('isAdmin')) {
      const user = await User.findById(id);
      if (user.isAdmin !== update.isAdmin) {
        return res.status(403).json({ message: "Admin cannot change user role to admin." });
      }
      delete update.isAdmin;
    }
    const updated = await User.findByIdAndUpdate(id, update, { new: true, runValidators: true }).select('-password');
    if (!updated) return res.status(404).json({ message: "User not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update user", error: err.message });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete user", error: err.message });
  }
};

// Update Disciple (admin cannot approve)
export const updateDisciple = async (req, res) => {
  try {
    const { id } = req.params;
    const update = { ...req.body };
    // Prevent admin from approving
    if (update.hasOwnProperty('isApproved')) {
      const disciple = await Disciple.findById(id);
      if (disciple.isApproved !== update.isApproved) {
        return res.status(403).json({ message: "Admin cannot approve disciples." });
      }
      delete update.isApproved;
    }
    const updated = await Disciple.findByIdAndUpdate(id, update, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: "Disciple not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update disciple", error: err.message });
  }
};

// Delete Disciple
export const deleteDisciple = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Disciple.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Disciple not found" });
    res.json({ message: "Disciple deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete disciple", error: err.message });
  }
};

// Update Volunteer
export const updateVolunteer = async (req, res) => {
  try {
    const { id } = req.params;
    const update = { ...req.body };
    const updated = await Volunteer.findByIdAndUpdate(id, update, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: "Volunteer not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update volunteer", error: err.message });
  }
};

// Delete Volunteer
export const deleteVolunteer = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Volunteer.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Volunteer not found" });
    res.json({ message: "Volunteer deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete volunteer", error: err.message });
  }
};

// Optionally: Delete Pending Disciple
export const deletePendingDisciple = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await PendingDisciple.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Pending disciple not found" });
    res.json({ message: "Pending disciple deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete pending disciple", error: err.message });
  }
};
