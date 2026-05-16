const express = require('express');
const router = express.Router();

// Get testimonial videos
router.get('/', async (req, res) => {
  try {
    const testimonials = [
      {
        id: 1,
        videoUrl: "https://res.cloudinary.com/dwc4eb5pi/video/upload/v1778952600/Testimonials1_qs9usa.mp4",
        author: "Alphin Shibu"
      },
      {
        id: 2,
        videoUrl: "https://res.cloudinary.com/dwc4eb5pi/video/upload/v1778952822/Testimonials2_fu0wgy.mp4",
        author: "Bezal Sanoj"
      }
    ];
    
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Error fetching testimonials" });
  }
});

module.exports = router;
