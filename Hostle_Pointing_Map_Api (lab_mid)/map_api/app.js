// app.js
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const session = require("express-session");

// Load environment variables
dotenv.config();

const app = express();

// ---------------------------
// Middleware
// ---------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// ---------------------------
// Session (for login)
app.use(
  session({
    secret: "vehariSecretKey",
    resave: false,
    saveUninitialized: true,
  })
);

// ---------------------------
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ---------------------------
// View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// ---------------------------
// Routes
const hostelRoutes = require("./routes/hostelRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/hostels", hostelRoutes);
app.use("/", authRoutes);

// ---------------------------
// Protect map page (User must be logged in)
app.get("/", async (req, res) => {
  if (!req.session.userId) return res.redirect("/login");

  const Hostel = require("./models/Hostel");
  const hostels = await Hostel.find();
  res.render("index", { hostels, user: req.session.userId });
});

// ---------------------------
// Admin login and dashboard
app.get("/admin", async (req, res) => {
  if (req.session.isAdmin) {
    const Hostel = require("./models/Hostel");
    const hostels = await Hostel.find();
    return res.render("adminDashboard", { hostels });
  }

  res.render("adminLogin", { error: null });
});

// Admin login POST
app.post("/admin/login", (req, res) => {
  const { password } = req.body;

  if (password === process.env.ADMIN_PASSWORD) {
    req.session.isAdmin = true;
    return res.redirect("/admin");
  }

  res.render("adminLogin", { error: "Incorrect password!" });
});

// Admin logout
app.get("/admin/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/admin");
});

// ---------------------------
// Protect admin sub-routes
const requireAdmin = (req, res, next) => {
  if (!req.session.isAdmin) return res.redirect("/admin");
  next();
};
app.use("/admin", requireAdmin, adminRoutes);

// ---------------------------
// Hostel detail page
app.get("/hostel/:id", async (req, res) => {
  const Hostel = require("./models/Hostel");
  const hostel = await Hostel.findById(req.params.id);

  if (!hostel) return res.status(404).send("Hostel not found");

  const landmarks = [
    { name: "Vehari Bus Stand", coords: [30.046, 72.347] },
    { name: "Market", coords: [30.0455, 72.349] },
    { name: "Vehari Hospital", coords: [30.0444, 72.3500] },
  ];

  res.render("hostelDetail", { hostel, landmarks });
});

// ---------------------------
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});