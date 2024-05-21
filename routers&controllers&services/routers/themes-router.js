const express = require('express')
const router = express.Router()

const themesController = require('../controllers/themes-controller')

router.route('/')
    .get(themesController.getAllThemes)
    .post(themesController.addTheme)
    .patch(themesController.updateTheme)
    .delete(themesController.deleteTheme)

router.get('/:id', themesController.getTheme)

module.exports = router