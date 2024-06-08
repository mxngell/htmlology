const express = require('express')
const router = express.Router()

const ratingController = require('../controllers/rating-controller')

router.get('/', ratingController.getRatingPage)

module.exports = router