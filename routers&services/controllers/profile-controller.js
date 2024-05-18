const { getUser, getUserRole, updateUserData } = require('../services/users-service')
const { getUserStatistic } = require('../services/statistic-service')

exports.getProfile = async (request, response) => {
    try {
        const user = await getUser(request.decodedUserToken.id)
        const userStatistic = await getUserStatistic(request.decodedUserToken.id)
        response.status(200).render('profile', {
            user,
            userStatistic
        })
    } catch (error) {
        console.log('Error message:'.error ,error) 
        response.status(500).render('500')
    }
}

exports.updateUserData = async (request, response) => {
    try {
        const result = await updateUserData(request.body.user_id, request.body.name, request.body.surname, request.body.middle_name, request.body.email)
        if(request.xhr) {
            response.status(200).json(result)
        } else {
            response.status(200).redirect('back')
        }
    } catch (error) {
        console.log('Error message:'.error ,error) 
        response.status(500).render('500')
    }
}

exports.logOut = async (request, response) => {
    try {
        request.session.destroy()
        response.status(200).redirect('/authorization')
    } catch (error) {
        console.log('Error message:'.error ,error) 
        response.status(500).render('500')
    }
}