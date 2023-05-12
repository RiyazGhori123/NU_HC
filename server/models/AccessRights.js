const mongoose = require('mongoose');

const accessRights = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AccessRights', accessRights);

