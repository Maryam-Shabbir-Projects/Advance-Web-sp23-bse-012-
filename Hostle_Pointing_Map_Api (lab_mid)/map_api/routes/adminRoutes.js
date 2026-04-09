const express = require("express");
const router = express.Router();
const Hostel = require("../models/Hostel");

// Admin dashboard route
router.get("/", async (req, res) => {
  try {
    const hostels = await Hostel.find(); // fetch all hostels from DB
    res.render("adminDashboard", { hostels }); // pass hostels to EJS
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// Add/Edit routes can go here
router.get("/add", (req, res) => {
  res.render("addHostel");
});

router.get("/edit/:id", async (req, res) => {
  try {
    const hostel = await Hostel.findById(req.params.id);
    if (!hostel) return res.status(404).send("Hostel not found");
    res.render("editHostel", { hostel });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;