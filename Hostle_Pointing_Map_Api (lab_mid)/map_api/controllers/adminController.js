const Hostel = require("../models/Hostel");

exports.renderDashboard = async (req, res) => {
  try {
    const hostels = await Hostel.find();
    res.render("adminDashboard", { hostels, role: req.user.role });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Render add hostel page
exports.renderAddPage = (req, res) => {
  res.render("addHostel");
};

// Render edit hostel page
exports.renderEditPage = async (req, res) => {
  try {
    const hostel = await Hostel.findById(req.params.id);
    if (!hostel) return res.status(404).send("Hostel not found");
    res.render("editHostel", { hostel });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};