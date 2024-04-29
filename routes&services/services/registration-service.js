const connect = require('../../models/database')
const bcrypt = require('bcrypt');

module.exports.regNewUser = async (requestBody) => {
    try {
        const email = await requestBody.email
        const password =  await requestBody.password
        const hashedPassword =  bcrypt.hashSync(password, 7)
        const name =  await requestBody.name
        const surname =  await requestBody.surname
        const middle_name =  await requestBody.middle_name
    
        const [check_email] = await connect.query(`SELECT * FROM users WHERE email = ?`, [email]) 

        if(!check_email[0]) { 
            await connect.query(`
                INSERT INTO users (user_id, name, surname, middle_name, email, password, role) 
                VALUES (NULL, ?, ?, ?, ?, ?, 1)
            `, [name, surname, middle_name, email, hashedPassword])
            return {
                result: true
            }             
        } else {
            throw new Error('Введённая почта уже зарегистрирована') 
        }
    } catch(error) {
        return {
            result: false,
            message: error.message
        }
    }
}