const express = require('express')
const router = express.Router()

const statisticController = require('../controllers/statistic-controller')

router.get('/:id', statisticController.getUserStat)

module.exports = router