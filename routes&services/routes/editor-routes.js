const express = require('express')
const router = express.Router()

const usersService = require('../services/users-service')
const studyService = require('../services/study-service')

router.get('/' , async (request, response) => {
    try {
        const user = await usersService.getUser(request.decodedUserToken.id)
        const themes = await studyService.getAuthorsThemes(user.user_id)
        response.status(200).render('editor', {
            user,
            themes
        })
    } catch (error) {
        response.status(500).render('500', {error})
    }
})

router.get('/:theme_id' , async (request, response) => {
    try {
        const user = await usersService.getUser(request.decodedUserToken.id)
        const theme = await studyService.getTheme(request.params.theme_id)
        response.status(200).render('editing', {
            user,
            theme
        })
    } catch (error) {
        response.status(500).render('500', {error})
    }
})

module.exports = router