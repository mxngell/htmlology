const jwt = require('jsonwebtoken');

module.exports = function (request, response, next) {
    try {
        const token = request.session.token
        if(token) {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
            response.decodedUserToken = decodedToken
            next()            
        } else {
            return response.status(401).redirect('/authorization')
        }
    } catch(error) {
        response.status(500).json(error)
    }
}
