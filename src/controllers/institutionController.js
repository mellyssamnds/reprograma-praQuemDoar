const institutionModel = require('../models/institutionModel')

const findAllInstitutions = async (req, res) => {
  try {
    const allInstitutions = await institutionModel.find()
    res.status(200).json(allInstitutions)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const findInstitutionById = async (req, res) => {
  try {
    const findInstitution = await institutionModel.findById(req.params.id)
    if (findInstitution == null) {
      res.status(404).json({ message: 'Institution Not Found' })
    }
    res.status(200).json(findInstitution)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const addNewInstitution = async (req, res) => {
  try {
    const {
      institutionName,
      address,
      description,
      socialCause,
      pix,
      phoneNumber,
      email
    } = req.body
    console.log(req.body)

    const newInstitution = new institutionModel({
      institutionName,
      address,
      description,
      socialCause,
      pix,
      phoneNumber,
      email
    })
    console.log(newInstitution)

    const institutionExists = await institutionModel.findOne({
      institutionName: institutionName
    })

    if (institutionExists) {
      return res.status(422).send({
        message: 'Institution already registered, please enter another one'
      })
    }

    const savedInstitution = await newInstitution.save()
    res.status(201).send({
      message: 'New institution successfully added',
      savedInstitution
    })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const updateInstitution = async (req, res) => {
  try {
    const {
      institutionName,
      address,
      description,
      socialCause,
      pix,
      phoneNumber,
      email
    } = req.body

    const updateInstitution = await institutionModel.findByIdAndUpdate(
      req.params.id,
      {
        institutionName,
        address,
        description,
        socialCause,
        pix,
        phoneNumber,
        email
      }
    )
    res.status(200).json({
      message: `Institution ${updateInstitution.institutionName} successfully updated`
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const deleteInstitution = async (req, res) => {
  try {
    const { id } = req.params
    const findInstitution = await institutionModel.findById(id)

    if (findInstitution == null) {
      return res
        .status(404)
        .json({ message: `Institution with id ${id} Not Found` })
    }
    await findInstitution.remove()
    res.status(200).json({
      message: `Institution with id ${id} was successfully deleted`,
      findInstitution
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  findAllInstitutions,
  findInstitutionById,
  addNewInstitution,
  updateInstitution,
  deleteInstitution
}
