const express = require('express')
const router = express.Router()

const themesService = require('../services/themes-service')

router.route('/')
    .get(async (request, response) => {
        try {
            const allThemes = await themesService.getAllThemes()
            response.status(200).json(allThemes)
        } catch (error) {
            console.log('Error message:'.error ,error) 
            response.status(500).render('500')
        }
    })
    .post(async (request, response) => {
        try {
            const result = await themesService.addTheme(request.body.title, request.body.description, request.body.theory, request.body.task, request.body.author)
            response.status(200).json(result)
        } catch (error) {
            console.log('Error message:'.error ,error) 
            response.status(500).render('500')
        }
    })
    .patch(async (request, response) => {
        try {
            const result = await themesService.updateTheme(request.body.theme_id, request.body.title, request.body.description, request.body.theory, request.body.task, request.body.author)
            response.status(200).json(result)
        } catch (error) {
            console.log('Error message:'.error ,error) 
            response.status(500).render('500')
        }
    })
    .delete(async (request, response) => {
        try {
            const result = await themesService.deleteTheme(request.body.theme_id)
            response.status(200).json(result)
        } catch (error) {
            console.log('Error message:'.error ,error) 
            response.status(500).render('500')
        }  
    })

router.get('/:id', async (request, response) => {
    try {
        const theme = await themesService.getTheme(request.params.id)
        if(theme) {
            response.status(200).json(theme)         
        } else {
            response.status(404).render('404');
        }            
    } catch (error) {
        console.log('Error message:'.error ,error) 
        response.status(500).render('500')
    }
})

module.exports = router