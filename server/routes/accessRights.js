const express = require('express');
const router = express.Router();
const AccessRights = require('../models/AccessRights');

// Get all records
router.get('/', (req, res) => {
  AccessRights.find()
    .then((records) => res.json(records))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.post('/', async (req, res) => {
    const { name, role } = req.body;
    const accessRight = new AccessRights({ name, role });
    try {
      await accessRight.save();
      res.status(201).json({ message: 'Access rights created successfully' });
    } catch (error) {
      res.status(500).json({ error });
    }
  });

module.exports = router;