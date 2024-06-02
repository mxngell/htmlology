const { getAuthorThemes, getTheme } = require('../services/themes-service')

exports.getEditorPage = async (request, response) => {
    try {
        const themes = await getAuthorThemes(request.user.user_id)
        response.status(200).render('editor', {
            user: request.user,
            themes
        })
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}

exports.getEditingTheme = async (request, response) => {
    try {
        const theme = await getTheme(request.params.theme_id)
        response.status(200).render('editing', {
            user: request.user,
            theme
        })
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}