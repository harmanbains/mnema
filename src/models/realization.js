const mongoose = require('mongoose')

//Create Realization Model

const realizationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  text: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
})

// Alter realization to only return public data
realizationSchema.methods.toJSON = function () {
  const realization = this
  const realizationObject = realization.toObject()

  delete realizationObject.__v
  delete realizationObject.user

  realizationObject.createdAt = realizationObject.createdAt.toLocaleString()
  realizationObject.updatedAt = realizationObject.updatedAt.toLocaleString()


  return realizationObject
}

const Realization = mongoose.model('Realization', realizationSchema)



module.exports = Realization
