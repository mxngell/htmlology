const express = require('express')
const router = express.Router()

const usersService = require('../services/users-service')

router.get('/' , async (request, response) => {
    try {
        const user = await usersService.getUser(response.decodedUserToken.id)
        response.status(200).render('home', {
            user
        })
    } catch (error) {
        response.status(500).render('500', {error})
    }
})

module.exports = router