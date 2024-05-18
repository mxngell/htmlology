const express = require('express')
const router = express.Router()

const registrationController = require('../controllers/registration-controller')

router.route('/')
    .get(registrationController.getRegPage)
    .post(registrationController.reg)
    
module.exports = router