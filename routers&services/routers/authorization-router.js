const express = require('express')
const router = express.Router()

const authorizationController = require('../controllers/authorization-controller')

router.route('/')
    .get(authorizationController.getAuthPage)
    .post(authorizationController.auth)

module.exports = router