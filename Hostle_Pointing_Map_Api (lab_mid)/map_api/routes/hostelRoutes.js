const express = require("express");
const router = express.Router();
const {
  createHostel,
  getHostels,
  deleteHostel,
  getHostelById,
  updateHostel
} = require("../controllers/hostelController");

// API routes
router.get("/", getHostels);           // Get all hostels
router.post("/", createHostel);        // Create new hostel
router.get("/:id", getHostelById);     // Get single hostel by ID
router.put("/:id", updateHostel);      // Update hostel
router.delete("/:id", deleteHostel);   // Delete hostel

module.exports = router;