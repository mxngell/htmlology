const express = require('express')
const router = express.Router()

const studyController = require('../controllers/study-controller')

router.get('/', studyController.getStudyPage)

router.get('/:id', studyController.getTheme)

router.post('/send-answer', studyController.sendAnswer)

module.exports = router