const { getUser } = require('../routers&controllers&services/services/users-service')

module.exports = async function(request, response, next) {
    try {
        const user = await getUser(request.decodedUserToken.id);
        if(!user) return response.status(404).render('404')
        request.user = user
        next()
    } catch(error) {
        console.log('Error message:'.error ,error) 
        response.status(500).render('500')
    }
}