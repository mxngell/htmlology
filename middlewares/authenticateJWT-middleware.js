const jwt = require('jsonwebtoken');
const { parse } = require('cookie')

module.exports = function (request, response, next) {
    try {
        const token = request.cookies.token
        if (!token) return response.status(401).redirect('/login') 
        jwt.verify(token, process.env.SECRET_KEY, function(error, decoded) {
            if(error) { 
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
