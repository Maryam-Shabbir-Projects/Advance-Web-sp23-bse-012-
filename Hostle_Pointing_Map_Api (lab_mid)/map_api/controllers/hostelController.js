const Hostel = require("../models/Hostel");

// CREATE hostel
exports.createHostel = async (req, res) => {
  console.log("BODY DATA:", req.body); // 👈 Debug

  try {
    // Check if body is empty
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "Request body is empty. Send JSON properly." });
    }

    const hostel = new Hostel(req.body);
    await hostel.save();

    res.status(201).json({
      message: "Hostel created successfully",
      data: hostel
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET all hostels
exports.getHostels = async (req, res) => {
  try {
    const hostels = await Hostel.find();

    res.json({
      count: hostels.length,
      data: hostels
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE a hostel
exports.deleteHostel = async (req, res) => {
  try {
    const hostel = await Hostel.findByIdAndDelete(req.params.id);
    if (!hostel) return res.status(404).json({ message: "Hostel not found" });

    res.json({ message: "Hostel deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET single hostel for edit
exports.getHostelById = async (req, res) => {
  try {
    const hostel = await Hostel.findById(req.params.id);
    if (!hostel) return res.status(404).json({ message: "Hostel not found" });

    res.json({ data: hostel });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE a hostel
exports.updateHostel = async (req, res) => {
  try {
    const hostel = await Hostel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!hostel) return res.status(404).json({ message: "Hostel not found" });

    res.json({ message: "Hostel updated successfully", data: hostel });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};