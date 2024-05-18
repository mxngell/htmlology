const { getUser } = require('../services/users-service')

exports.getHomePage = async (request, response) => {
    try {
        const user = await getUser(request.decodedUserToken.id)
        response.status(200).render('home', {
            user
        })
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}