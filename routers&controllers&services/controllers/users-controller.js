const usersService = require('../services/users-service')

exports.getAllUsers = async (request, response) => {
    try {
        const allUsers = await usersService.getAllUsers()
        response.status(200).json(allUsers)
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}

exports.getUser = async (request, response) => {
    try {
        const user = await usersService.getUser(request.params.id)
        response.status(200).json(user)
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}

exports.deleteUser = async (request, response) => {
    try {
        const affectedRows = await usersService.deleteUser(request.body.user_id)
        affectedRows != 0 ? result = {result: true} : result = {result: false,message: 'Произошла ошибка при удалении пользователя'}
        response.status(200).json(result)
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }  
}

exports.updateUserRole = async (request, response) => {
    try {
        const affectedRows = await usersService.updateUserRole(request.body.user_id, request.body.role)
        affectedRows != 0 ? result = {result: true} : result = {result: false,message: 'Произошла ошибка при обновлении роли пользователя'}
        response.status(200).json(result)
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    } 
}