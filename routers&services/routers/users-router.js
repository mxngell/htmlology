const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users-controller')

router.route('/')
    .get(usersController.getAllUsers)
    .delete(usersController.deleteUser)
    .patch(usersController.updateUserRole)

router.get('/:id', usersController.getUser)

module.exports = router