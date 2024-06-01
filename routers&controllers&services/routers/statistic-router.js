const express = require('express')
const router = express.Router()

const statisticController = require('../controllers/statistic-controller')

router.route('/')
    .get(statisticController.getStatPage)
    .delete(statisticController.deleteStat)
    .post(statisticController.addStatistic)

router.get('/:id', statisticController.getUserStat)

module.exports = router