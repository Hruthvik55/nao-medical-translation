const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "src/uploads/audio",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("audio"), (req, res) => {
  res.json({
    audioUrl: `/uploads/audio/${req.file.filename}`,
  });
});

module.exports = router;
