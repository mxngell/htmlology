const express = require('express')
const router = express.Router()

const usersService = require('../services/users-service')

router.get('/', async (request, response) => {
    try {
        const user = await usersService.getUser(response.decodedUserToken.id)
        const allUsers = await usersService.getAllUsers()
        response.status(200).render('admin-panel', {
            user,
            allUsers
        })
    } catch (error) {
        response.status(500).render('500', {error})
    }
})

module.exports = router