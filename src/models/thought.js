const mongoose = require('mongoose')

//Create Thought Model

const thoughtSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  text: {
    type: String,
    required: true,
    trim: true
  },
  reviewed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

// Alter thought to only return public data
thoughtSchema.methods.toJSON = function () {
  const thought = this
  const thoughtObject = thought.toObject()

  delete thoughtObject.__v
  delete thoughtObject.user

  thoughtObject.createdAt = thoughtObject.createdAt.toLocaleString()
  thoughtObject.updatedAt = thoughtObject.updatedAt.toLocaleString()


  return thoughtObject
}

const Thought = mongoose.model('Thought', thoughtSchema)



module.exports = Thought