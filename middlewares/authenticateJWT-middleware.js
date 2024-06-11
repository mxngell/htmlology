const jwt = require('jsonwebtoken');

module.exports = function (request, response, next) {
    try {
        if (!request.session.token) return response.status(401).redirect('/login') 
        jwt.verify(request.session.token, process.env.SECRET_KEY, function(error, decoded) {
            if(error) { 
                request.session.destroy()
                return response.status(401).redirect('/login')
            }
            request.decodedUserToken = decoded
            next()
        })
    } catch(error) {
        console.log('Error message:'.error ,error) 
        response.status(500).render('500')
    }
}
