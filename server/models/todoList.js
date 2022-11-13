const mongoose = require('mongoose')

const todoListSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  isComplete: {
    type: Boolean,
    default: false
  },
  disabledEdit: {
    type: Boolean,
    default: true
  }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('TodoList', todoListSchema)