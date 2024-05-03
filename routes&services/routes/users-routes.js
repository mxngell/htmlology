const express = require('express')
const router = express.Router()

const usersService = require('../services/users-service')

router.route('/')
    .get(async (request, response) => {
        try {
            const allUsers = await usersService.getAllUsers()
            response.status(200).json(allUsers)
        } catch (error) {
            response.status(500).render('500', {error})
        }
    })
    .delete(async (request, response) => {
        try {
            const result = await usersService.deleteUser(request.body.user_id)
            response.status(200).json(result)
        } catch (error) {
            response.status(500).render('500', {error})
        }  
    })
    .patch(async (request, response) => {
        try {
            const result = await usersService.updateUserRole(request.body.user_id, request.body.role)
            response.status(200).json(result)
        } catch (error) {
            response.status(500).render('500', {error})
        } 
    })

router.get('/:id', async (request, response) => {
    try {
        const user = await usersService.getUser(request.params.id)
        response.status(200).json(user)
    } catch (error) {
        response.status(500).render('500', {error})
    }
})

module.exports = router