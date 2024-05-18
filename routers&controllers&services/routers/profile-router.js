const express = require('express')
const router = express.Router()

const profileController = require('../controllers/profile-controller')

router.get('/', profileController.getProfile)

router.post('/update-user-data', profileController.updateUserData)

router.get('/log-out', profileController.logOut)

module.exports = router