const { updateUserData } = require('../services/users-service')
const { getUserStatistic } = require('../services/statistic-service')

exports.getProfile = async (request, response) => {
    try {
        const userStatistic = await getUserStatistic(request.user.user_id)
        response.status(200).render('profile', {
            user: request.user,
            userStatistic
        })
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}

exports.updateUserData = async (request, response) => {
    try {
        const affectedRows = await updateUserData(request.body.user_id, request.body.name, request.body.surname, request.body.middle_name, request.body.email)
        affectedRows != 0 ? result = {result: true} : result = {result: false,message: 'Произошла ошибка при обновлении личных данных'}
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

exports.logOut = async (request, response) => {
    try {
        response.clearCookie('token')
        response.status(200).redirect('/login')
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}