// const jwt = require('jsonwebtoken');
// const {secret} = require('../models/config')

// module.exports = function (roles) {
//     return function (request, response, next) {
//         try {
//             const userToken = request.session.token
//             if(!userToken) {
//                 response.status(403).redirect('/authorization')
//             } else {
//                 const {role} = jwt.verify(userToken, secret)
//                 console.log(role);
//                 next()
//             }
//         } catch(err) {
//             response.status(403).json({message: "Произошла ошибка в процессе получения доступа к ресурсу"})
//         }        
//     }
// } 