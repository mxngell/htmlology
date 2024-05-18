const registrationService = require('../services/registration-service')

exports.getRegPage = (request, response) => {
    if(request.session.token) {
        response.status(200).redirect('/home');   
    } else {
        response.status(200).render('registration') 
    }
}

exports.reg = async (request, response) => {
    try {
        const result = await registrationService.regNewUser(request.body)
        response.status(200).json(result)
    } catch (error) {
        console.log('Error message:'.error ,error) 
        response.status(500).render('500')
    }
}