const controller = require('../controllers/donorController')
const express = require('express')
const router = express.Router()

router.get('/all', controller.findAllDonors)
router.get('/:id', controller.findDonorById)
router.post('/add', controller.addNewDonor)
router.patch('/:id', controller.updateDonor)
router.delete('/:id', controller.deleteDonor)

module.exports = router
