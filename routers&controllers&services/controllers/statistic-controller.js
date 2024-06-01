const statisticService = require('../services/statistic-service')
const { getAllThemes } = require('../services/themes-service')
const { getUser, getStudents } = require('../services/users-service')
const ShortUniqueId = require('short-unique-id')
const { randomUUID } = new ShortUniqueId({ length: 7 });

exports.getStatPage = async (request, response) => {
    try {
        const user = await getUser(request.decodedUserToken.id)
        const usersStatistic = await statisticService.getUsersStatistic(user.user_id)
        const students = await getStudents()
        const allThemes = await getAllThemes()
        const themes = allThemes.map((theme) => ({
            theme_id: theme.theme_id,
            title: theme.title
        }))
        response.status(200).render('statistic', {
            user,
            usersStatistic,
            students,
            themes
        })
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}

exports.getUserStat = async (request, response) => {
    try {
        const userStatistic = await statisticService.getUserStatistic(request.params.id)
        response.status(200).json(userStatistic)
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}

exports.addStatistic = async (request, response) => {
    try {
        const stat_id = randomUUID()
        const date = new Date()
        const affectedRows = await statisticService.addStatistic(stat_id, request.body.student, request.body.theme, date, request.decodedUserToken.id, request.body.note, request.body.score)
        affectedRows != 0 ? result = {result: true} : result = {result: false,message: 'Произошла ошибка при добавлении оценки'}
        if(request.xhr) {
            response.status(200).json(result)
        } else {
            response.status(200).redirect('back')
        }
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}

exports.deleteStat = async (request, response) => {
    try {
        const affectedRows = await statisticService.deleteStatistic(request.body.stat_id)
        affectedRows != 0 ? result = {result: true} : result = {result: false,message: 'Произошла ошибка при удалении оценки'}
        response.status(200).json(result)
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}