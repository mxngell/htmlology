const { checkUser, addUser } = require('../services/users-service')
const bcrypt = require('bcrypt');
const ShortUniqueId = require('short-unique-id')
const { randomUUID } = new ShortUniqueId({ length: 7 });

exports.getRegPage = (request, response) => {
    if(request.session.token) {
        response.status(200).redirect('/home');   
    } else {
        response.status(200).render('registration') 
    }
}

exports.reg = async (request, response) => {
    try {
        const { email, password, name, surname, middle_name } = request.body
        const hashedPassword =  bcrypt.hashSync(password, 7)

        const user = await checkUser(email)
        if(user) return response.status(200).json({
            result: false, 
            message: 'Введённая почта уже зарегистрирована'
        })

        const user_id = randomUUID()
        await addUser(user_id, name, surname, middle_name, email, hashedPassword)
        response.status(200).json({
            result: true
        })
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}