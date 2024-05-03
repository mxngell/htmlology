const express = require('express')
const router = express.Router()

const registrationService = require('../services/registration-service')

router.route('/')
    .get((request, response) => {
        if(request.session.token) {
            response.status(200).redirect('/home');   
        } else {
            response.status(200).render('registration') 
        }
    })
    .post(async (request, response) => {
        try {
            const result = await registrationService.regNewUser(request.body)
            response.status(200).json(result)
        } catch (error) {
            response.status(500).render('500', {error})
        }
    })
    
module.exports = router