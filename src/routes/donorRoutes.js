const controller = require('../controllers/institutionController')
const express = require('express')
const router = express.Router()

router.get('/all', controller.findAllInstitutions)
router.get('/:id', controller.findInstitutionById)
router.post('/add', controller.addNewInstitution)
router.patch('/:id', controller.updateInstitution)
router.delete('/:id', controller.deleteInstitution)

module.exports = router
