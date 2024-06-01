const themesService = require('../services/themes-service')
const ShortUniqueId = require('short-unique-id')
const { randomUUID } = new ShortUniqueId({ length: 7 });

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
        const check_title = await themesService.checkTitle(request.body.title)
        if(check_title) return response.status(200).json({
            result: false,
            message: 'Тема с таким названием уже существует'
        })

        const theme_id = randomUUID()
        await themesService.addTheme(theme_id, request.body.title, request.body.description, request.body.theory, request.body.task, request.decodedUserToken.id)
        response.status(200).json({
            result: true
        })
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}

exports.updateTheme = async (request, response) => {
    try {
        const affectedRows = await themesService.updateTheme(request.body.theme_id, request.body.title, request.body.description, request.body.theory, request.body.task)
        affectedRows != 0 ? result = {result: true} : result = {result: false,message: 'Произошла ошибка при обновлении темы'}
        response.status(200).json(result)
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}

exports.deleteTheme = async (request, response) => {
    try {
        const affectedRows = await themesService.deleteTheme(request.body.theme_id)
        affectedRows != 0 ? result = {result: true} : result = {result: false,message: 'Произошла ошибка при удалении темы'}
        response.status(200).json(result)
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }  
}

