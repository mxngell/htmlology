const { checkUser, addUser } = require('../services/users-service')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ShortUniqueId = require('short-unique-id')
const { randomUUID } = new ShortUniqueId({ length: 7 });
const cookie = require('cookie')

exports.getLoginPage = (request, response) => {
    if(request.cookies.token) {
        response.status(200).redirect('/home');   
    } else {
        response.status(200).render('login') 
    }
}

exports.auth = async (request, response) => {
    try {
        const user = await checkUser(request.body.email)
        if(!user || !bcrypt.compareSync(request.body.password, user.password)) {
            return response.status(200).json({
                access: false, 
                message: 'Неверные данные от профиля'
            })
        }

        const accessToken = jwt.sign({
            id: user.user_id,
            role: user.role
        }, process.env.SECRET_KEY, {expiresIn: '1h'})

        response.cookie('token', accessToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
            path: '/'
        })

        response.status(200).json({
            access: true
        })
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
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