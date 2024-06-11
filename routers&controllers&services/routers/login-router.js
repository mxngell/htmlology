const express = require('express')
const router = express.Router()

const loginController = require('../controllers/login-controller')

router.route('/')
    .get(loginController.getLoginPage)

router.post('/reg', loginController.reg)
router.post('/auth', loginController.auth)

module.exports = router