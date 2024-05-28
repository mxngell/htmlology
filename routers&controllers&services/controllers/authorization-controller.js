const { checkUser } = require('../services/users-service')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getAuthPage = (request, response) => {
    if(request.session.token) {
        response.status(200).redirect('/home');   
    } else {
        response.status(200).render('authorization') 
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

        request.session.token = accessToken
        response.status(200).json({
            access: true,
            token: accessToken
        })
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}