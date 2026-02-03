const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// เชื่อม routes/auth.js
app.use("/api", require("./routes/auth2"));

app.get("/", (req, res) => {
  res.send("Backend is running OK");
});

app.get("/api/test", (req, res) => {
  res.json({ status: "Backend works" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
