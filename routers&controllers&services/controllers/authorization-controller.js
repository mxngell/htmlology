const authorizationService = require('../services/authorization-service');

exports.getAuthPage = (request, response) => {
    if(request.session.token) {
        response.status(200).redirect('/home');   
    } else {
        response.status(200).render('authorization') 
    }
}

exports.auth = async (request, response) => {
    try {
        const result = await authorizationService.authUser(request.body)
        if(result.access == true) request.session.token = result.token
        response.status(200).json(result)
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}