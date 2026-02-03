const express = require("express");
const router = express.Router();
const db = require("../db");

// POST /api/login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  const sql = `
    SELECT *
    FROM user
    LEFT JOIN contact
      ON user.contact_id = contact.contact_id
    WHERE user.username = ? AND user.password = ?
  `;

  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    res.json({
      message: "Login success",
      user: result[0]
    });
  });
});

module.exports = router;

// // GET /api/test-db
// router.get("/test-db", (req, res) => {
//   const sql = "SELECT id, email FROM users";

//   db.query(sql, (err, result) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: "DB error" });
//     }

//     res.json({
//       message: "DB fetch success",
//       data: result
//     });
//   });
// });
