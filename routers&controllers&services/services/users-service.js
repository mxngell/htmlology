const connect = require('../../models/database')

exports.getAllUsers = async () => {
    const [users] = await connect.query(`SELECT * FROM Users ORDER BY name, surname, middle_name`)
    return users
}

exports.getRoles = async () => {
    const [roles] = await connect.query(`SELECT * FROM Roles`)
    return roles
}

exports.getUser = async (user_id) => {
    const [user] = await connect.query(`
    SELECT user_id, Users.name, surname, middle_name, email, Roles.name as role 
    FROM Users 
    INNER JOIN Roles ON Users.role = Roles.role_id 
    WHERE user_id = ?`, [user_id])
    return user[0]
}

exports.getStudents = async () => {
    const [students] = await connect.query(`
    SELECT user_id, CONCAT(surname, ' ', Users.name, ' ',  middle_name) as fio
    FROM Users 
    INNER JOIN Roles ON Users.role = Roles.role_id
    WHERE Roles.name = 'Обучающийся';
    `)
    return students
}

exports.checkUser =  async (email)  => {
    const [user] = await connect.query(`
    SELECT user_id, password, Roles.name as role 
    FROM Users 
    INNER JOIN Roles ON Users.role = Roles.role_id 
    WHERE email = ?`, [email])
    return user[0]
}

exports.addUser =  async (user_id, name, surname, middle_name, email, hashedPassword)  => {
    const [{affectedRows}] = await connect.query(`
    INSERT INTO Users (user_id, name, surname, middle_name, email, password, role) 
    VALUES (?, ?, ?, ?, ?, ?, 'KhJEgjk')
    `, [user_id, name, surname, middle_name, email, hashedPassword])
    return affectedRows
}

exports.deleteUser = async (user_id) => {
    const [{affectedRows}] = await connect.query(`DELETE FROM Users WHERE user_id = ?`, [user_id])
    return affectedRows
}

exports.updateUserData = async (user_id, name, surname, middle_name, email) => {
    const [{affectedRows}] = await connect.query(`
    UPDATE Users 
    SET name = ?, surname = ?, middle_name = ?, email = ?
    WHERE user_id = ?`, [name, surname, middle_name, email, user_id])
    return affectedRows
}   

exports.updateUserRole = async (user_id, role_id) => {
    const [{affectedRows}] = await connect.query(`UPDATE Users SET role = ? WHERE user_id = ?`, [role_id, user_id])
    return affectedRows
}   
