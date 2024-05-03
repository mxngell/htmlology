const express = require('express')
const router = express.Router()

const usersService = require('../services/users-service')

router.get('/' , async (request, response) => {
    try {
        const user = await usersService.getUser(request.decodedUserToken.id)
        const userRole = await usersService.getUserRole(request.decodedUserToken.id)
        response.status(200).render('profile', {
            user,
            userRole
        })
    } catch (error) {
        response.status(500).render('500', {error})
    }
})

router.post('/update-user-data' , async (request, response) => {
    try {
        const result = await usersService.updateUserData(request.body.user_id, request.body.name, request.body.surname, request.body.middle_name, request.body.email)
        if(request.xhr) {
            response.status(200).json(result)
        } else {
            response.status(200).redirect('back')
        }
    } catch (error) {
        response.status(500).render('500', {error})
    }
})

router.get('/log-out' , async (request, response) => {
    try {
        request.session.destroy()
        response.status(200).redirect('/authorization')
    } catch (error) {
        response.status(500).render('500', {error})
    }
})

module.exports = router