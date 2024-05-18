const express = require('express')
const router = express.Router()

const editorController = require('../controllers/editor-controller')

router.get('/', editorController.getEditorPage)

router.get('/:theme_id', editorController.getEditingTheme)

module.exports = router