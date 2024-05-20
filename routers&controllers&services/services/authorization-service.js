const connect = require('../../models/database')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.authUser = async ({email, password}) => {
    const [user] = await connect.query(`SELECT user_id, password, Roles.name as role FROM Users INNER JOIN Roles ON Users.role = Roles.role_id WHERE email = ?`, [email])
    if(!user[0] || !bcrypt.compareSync(password, user[0].password)) return {access: false, message: 'Неверные данные от профиля'}

    const accessToken = jwt.sign({
        id: user[0].user_id,
        role: user[0].role
    }, process.env.SECRET_KEY, {expiresIn: '1h'})

    return {
        access: true,
        token: accessToken
    }
}