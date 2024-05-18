const { getUser } = require('../services/users-service')
const { getAuthorsThemes, getTheme } = require('../services/themes-service')

exports.getEditorPage = async (request, response) => {
    try {
        const user = await getUser(request.decodedUserToken.id)
        const themes = await getAuthorsThemes(user.user_id)
        response.status(200).render('editor', {
            user,
            themes
        })
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}

exports.getEditingTheme = async (request, response) => {
    try {
        const user = await getUser(request.decodedUserToken.id)
        const theme = await getTheme(request.params.theme_id)
        response.status(200).render('editing', {
            user,
            theme
        })
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}