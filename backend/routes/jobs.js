const express = require('express');
const router = express.Router();
const Job = require('../model/job');

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new job
router.post('/', async (req, res) => {
  try {
    const job = new Job(req.body);
    const createdJob = await job.save();
    res.status(201).json(createdJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a job by id
router.put('/:id', async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedJob) return res.status(404).json({ message: 'Job not found' });
    res.json(updatedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a job by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJob) return res.status(404).json({ message: 'Job not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
