import express from "express";
import { getAllUsers, getAllVolunteers, getAllDisciples, getAllPendingDisciples, updateUser, deleteUser, updateDisciple, deleteDisciple, updateVolunteer, deleteVolunteer, deletePendingDisciple } from "../controllers/adminController.js";
import { protect, admin } from "../middleware/auth.js";

const router = express.Router();

// Apply protect and admin middleware to all admin routes
router.use(protect, admin);

router.get("/users", getAllUsers);
router.get("/volunteers", getAllVolunteers);
router.get("/disciples", getAllDisciples);
router.get("/pending-disciples", getAllPendingDisciples);

// Update and Delete routes
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

router.put("/disciples/:id", updateDisciple);
router.delete("/disciples/:id", deleteDisciple);

router.put("/volunteers/:id", updateVolunteer);
router.delete("/volunteers/:id", deleteVolunteer);

router.delete("/pending-disciples/:id", deletePendingDisciple);

export default router;