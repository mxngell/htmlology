const express = require('express')
const router = express.Router()

const authorizationService = require('../services/authorization-service');

router.get('/', (request, response) => {
    if(request.session.token) {
        response.status(200).redirect('/home');   
    } else {
        response.status(200).render('authorization') 
    }
})

router.post('/auth-user', async (request, response) => {
    try {
        const result = await authorizationService.authUser(request.body)
        if(result.access == true) request.session.token = result.token
        response.status(200).json(result)
    } catch (error) {
        response.status(500).render('500', {error})
    }
})

module.exports = router