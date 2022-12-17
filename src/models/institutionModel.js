const mongoose = require('mongoose')

const institutionSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId
    },
    institutionName: {
      type: String,
      required: true,
      unique: true
    },
    address: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
      default: 'no description'
    },
    socialCause: {
      type: String,
      required: true
    },
    pix: {
      type: Number,
      required: true,
      unique: true
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
)

const Model = mongoose.model('Institution', institutionSchema)

module.exports = Model
