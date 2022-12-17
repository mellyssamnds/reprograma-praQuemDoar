const mongoose = require('mongoose')

const donorSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId
    },
    donorName: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true
    },
    cpf: {
      type: Number,
      required: true,
      minLength: 0,
      maxLenght: 11,
      unique: true
    },
    donationAmount: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Model = mongoose.model('Donor', donorSchema)

module.exports = Model
