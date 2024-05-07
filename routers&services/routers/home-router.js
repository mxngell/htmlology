const express = require('express')
const router = express.Router()

const usersService = require('../services/users-service')

router.get('/' , async (request, response) => {
    try {
        const user = await usersService.getUser(request.decodedUserToken.id)
        response.status(200).render('home', {
            user
        })
    } catch (error) {
        console.log('Error message:'.error ,error) 
        response.status(500).render('500')
    }
})

module.exports = router