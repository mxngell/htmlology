module.exports = function(roles) {
    return function (request, response, next) {
        try {
            return roles.includes(request.decodedUserToken.role) ? next() : response.status(403).render('403');
        } catch(error) {
            console.log('Error message:'.error ,error) 
            response.status(500).render('500')
        }
    }
}
