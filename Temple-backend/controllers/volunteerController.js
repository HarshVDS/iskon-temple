import Volunteer from '../models/Volunteer.js';

export const registerVolunteer = async (req, res) => {
  try {
    const {
      fullName, email, mobile, address,
      country, nearestCenter, availability,
      interestAreas, experience, reason, skills, agreed
    } = req.body;

    const volunteer = await Volunteer.create({
      fullName,
      email,
      mobile,
      address,
      country,
      nearestCenter,
      availability,
      interestAreas,
      experience,
      reason,
      skills,
      agreed
    });

    res.status(201).json({ message: "Volunteer registration successful", volunteer });
  } catch (err) {
    res.status(500).json({ message: "Failed to register volunteer", error: err.message });
  }
};
