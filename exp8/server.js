const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // Allows the API to understand JSON data in the request body

// 1. Connect to MongoDB (Make sure your local MongoDB server is running)
mongoose.connect('mongodb://127.0.0.1:27017/f1database')
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// 2. Define the Database Schema & Model
const driverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    team: String,
    points: Number
});

const Driver = mongoose.model('Driver', driverSchema);

// ==========================================
// 3. HTTP Methods (The RESTful API Routes)
// ==========================================

// POST: Create a new driver record
app.post('/api/drivers', async (req, res) => {
    try {
        const newDriver = new Driver(req.body);
        const result = await newDriver.save();
        res.status(201).json({ message: "Driver created!", data: result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET: Retrieve all drivers
app.get('/api/drivers', async (req, res) => {
    try {
        const drivers = await Driver.find();
        res.status(200).json(drivers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT: Update an existing driver's details by ID
app.put('/api/drivers/:id', async (req, res) => {
    try {
        const updatedDriver = await Driver.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true } // Returns the updated document
        );
        if (!updatedDriver) return res.status(404).json({ message: "Driver not found" });
        
        res.status(200).json({ message: "Driver updated!", data: updatedDriver });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE: Remove a driver from the database by ID
app.delete('/api/drivers/:id', async (req, res) => {
    try {
        const deletedDriver = await Driver.findByIdAndDelete(req.params.id);
        if (!deletedDriver) return res.status(404).json({ message: "Driver not found" });
        
        res.status(200).json({ message: "Driver deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ==========================================
// 4. Start the Server
// ==========================================
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`F1 REST API is running on http://localhost:${PORT}`);
});