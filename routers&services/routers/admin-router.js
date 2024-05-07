const express = require('express')
const router = express.Router()

const usersService = require('../services/users-service')

router.get('/', async (request, response) => {
    try {
        const user = await usersService.getUser(request.decodedUserToken.id)
        const users = await usersService.getAllUsers()
        const roles = await usersService.getRoles()
        response.status(200).render('admin-panel', {
            user,
            users,
            roles
        })
    } catch (error) {
        console.log('Error message:'.error ,error) 
        response.status(500).render('500')
    }
})

module.exports = router