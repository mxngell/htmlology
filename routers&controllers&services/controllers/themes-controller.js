const themesService = require('../services/themes-service')

exports.getAllThemes = async (request, response) => {
    try {
        const allThemes = await themesService.getAllThemes()
        response.status(200).json(allThemes)
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}

exports.getTheme = async (request, response) => {
    try {
        const theme = await themesService.getTheme(request.params.id)
        if(theme) {
            response.status(200).json(theme)         
        } else {
            response.status(404).render('404');
        }            
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}

exports.addTheme = async (request, response) => {
    try {
        const result = await themesService.addTheme(request.body.title, request.body.description, request.body.theory, request.body.task, request.body.author)
        response.status(200).json(result)
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}

exports.updateTheme = async (request, response) => {
    try {
        const result = await themesService.updateTheme(request.body.theme_id, request.body.title, request.body.description, request.body.theory, request.body.task, request.body.author)
        response.status(200).json(result)
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}

exports.deleteTheme = async (request, response) => {
    try {
        const result = await themesService.deleteTheme(request.body.theme_id)
        response.status(200).json(result)
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }  
}

