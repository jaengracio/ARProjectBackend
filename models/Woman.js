const mongoose = require('mongoose');

const WomanSchema = new mongoose.Schema({
  women_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  died: {
    type: String,
  },
  desc: {
    type: String,
    required: true
  },
  categories: {
    type: String,
    required: true
  }
});

const Woman = mongoose.model('Woman', WomanSchema);
module.exports = Woman;
