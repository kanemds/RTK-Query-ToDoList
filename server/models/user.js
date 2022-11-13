const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  disabledEdit: {
    type: Boolean,
    default: true
  }
},
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)