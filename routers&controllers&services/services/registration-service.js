const connect = require('../../models/database')
const bcrypt = require('bcrypt');
const ShortUniqueId = require('short-unique-id')
const { randomUUID } = new ShortUniqueId({ length: 7 });

exports.regNewUser = async (requestBody) => {
    const user_id = randomUUID()
    const { email, password, name, surname, middle_name } = requestBody
    const hashedPassword =  bcrypt.hashSync(password, 7)

    const [check_email] = await connect.query(`SELECT * FROM Users WHERE email = ?`, [email]) 
    if(check_email[0]) return {result: false, message: 'Введённая почта уже зарегистрирована'}

    await connect.query(`
    INSERT INTO Users (user_id, name, surname, middle_name, email, password, role) 
    VALUES (?, ?, ?, ?, ?, ?, 'KhJEgjk')
    `, [user_id, name, surname, middle_name, email, hashedPassword])

    return {
        result: true
    }  
}