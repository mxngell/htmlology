const {getUser, getAllUsers, getRoles} = require('../services/users-service')

exports.getAdminPage = async (request, response) => {
    try {
        const user = await getUser(request.decodedUserToken.id)
        const users = await getAllUsers()
        const roles = await getRoles()
        response.status(200).render('admin-panel', {
            user,
            users,
            roles
        })
    } catch (error) {
        console.log('Error message:'.error ,error) 
        response.status(500).render('500')
    }
}