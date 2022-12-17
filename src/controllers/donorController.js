const donorModel = require('../models/donorModel')

const findAllDonors = async (req, res) => {
  try {
    const allDonors = await donorModel.find()
    res.status(200).json(allDonors)
  } catch {
    console.error(error)
    res.status(404).json({ message: error.message })
  }
}

const findDonorById = async (req, res) => {
  try {
    const findDonor = await donorModel.findById(req.params.id)
    if (findDonor == null) {
      res.status(404).json({ message: 'Donor Not Found' })
    }
    res.status(200).json(findDonor)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const addNewDonor = async (req, res) => {
  try {
    const {
      donorName,
      email,
      phoneNumber,
      cpf,
      donationAmount,
      donationInstitution
    } = req.body

    const newDonor = new donorModel({
      donorName,
      email,
      phoneNumber,
      cpf,
      donationAmount,
      donationInstitution
    })

    const donorExists = await donorModel.findOne({
      donorName: donorName
    })
    console.log(donorExists)
    if (donorExists) {
      return res.status(422).send({
        message: 'Donor already registered, please enter another one'
      })
    }

    const savedDonor = await newDonor.save()
    res.status(201).send({
      message: 'New donor successfully added',
      savedDonor
    })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const updateDonor = async (req, res) => {
  try {
    const { donorName, email, phoneNumber, cpf, donationAmount } = req.body

    const updateDonor = await donorModel.findByIdAndUpdate(req.params.id, {
      donorName,
      email,
      phoneNumber,
      cpf,
      donationAmount
    })

    res.status(200).json({ message: 'Donor successfully updated', updateDonor })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const deleteDonor = async (req, res) => {
  try {
    const { id } = req.params
    const deleteDonor = await donorModel.findByIdAndDelete(id)
    const message = `Donor with name ${deleteDonor.name} was successfully deleted`
    res.status(200).json({ message })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  findAllDonors,
  findDonorById,
  addNewDonor,
  updateDonor,
  deleteDonor
}
