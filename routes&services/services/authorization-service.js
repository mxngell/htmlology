const connect = require('../../models/database')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.authUser = async ({email, password}) => {
    try {
        const [user] = await connect.query(`SELECT * FROM users WHERE email = ?`, [email])

        if(!user[0]) throw new Error('Профиль с данной почтой не найден')
        if(!bcrypt.compareSync(password, user[0].password)) throw new Error('Неверный пароль')

        const accessToken = jwt.sign({
            id: user[0].user_id,
            role: user[0].role
        }, process.env.SECRET_KEY, {expiresIn: '2h'})

        return {
            access: true,
            token: accessToken
        }
    } catch(error) {
        return {
            access: false,
            message: error.message
        }
    }
}