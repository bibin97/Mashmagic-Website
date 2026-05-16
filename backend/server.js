const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;
const LMS_BACKEND_URL = process.env.LMS_BACKEND_URL || 'http://localhost:5000/api';

app.use(cors());
app.use(express.json());

// Routes
const testimonialRoutes = require('./api/testimonials');
app.use('/api/testimonials', testimonialRoutes);

// Proxy Login
app.post('/api/auth/login', async (req, res) => {
    try {
        const response = await axios.post(`${LMS_BACKEND_URL}/auth/login`, req.body);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { message: 'Server Error' });
    }
});

// Proxy Student Updates
app.post('/api/student/daily-update', async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        const response = await axios.post(`${LMS_BACKEND_URL}/student/daily-update`, req.body, {
            headers: { Authorization: authHeader }
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { message: 'Server Error' });
    }
});

app.get('/api/student/my-updates', async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        const response = await axios.get(`${LMS_BACKEND_URL}/student/my-updates`, {
            headers: { Authorization: authHeader }
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { message: 'Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Main Website Backend running on port ${PORT}`);
});
