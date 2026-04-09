const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Render pages
router.get("/login", (req, res) => res.render("login", { error: null }));
router.get("/register", (req, res) => res.render("register", { error: null }));

// Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.render("register", { error: "Email already exists!" });

    const user = new User({ name, email, password });
    await user.save();
    req.session.userId = user._id;
    res.redirect("/");
  } catch (err) {
    res.render("register", { error: "Registration failed: " + err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.render("login", { error: "Invalid email or password" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.render("login", { error: "Invalid email or password" });

    req.session.userId = user._id;
    res.redirect("/");
  } catch (err) {
    res.render("login", { error: "Login failed: " + err.message });
  }
});

// Logout
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;