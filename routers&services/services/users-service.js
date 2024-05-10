const connect = require('../../models/database')

module.exports.getAllUsers = async () => {
    const [users] = await connect.query(`SELECT * FROM Users ORDER BY name, surname, middle_name`)
    return users
}

module.exports.getRoles = async () => {
    const [roles] = await connect.query(`SELECT * FROM Roles`)
    return roles
}

module.exports.getUser = async (user_id) => {
    const [user] = await connect.query(`
    SELECT user_id, Users.name, surname, middle_name, email, Roles.name as role 
    FROM Users 
    INNER JOIN Roles ON Users.role = Roles.role_id 
    WHERE user_id = ?`, [user_id])
    return user[0]
}

module.exports.deleteUser = async (user_id) => {
    try {
        const [{affectedRows}] = await connect.query(`DELETE FROM Users WHERE user_id = ?`, [user_id])
        if(affectedRows != 0) {
            return {
                result: true
            }
        } else {
            throw new Error()
        }
    } catch(error) {
        return {
            result: false,
            message: error.message
        }
    }

}

module.exports.updateUserData = async (user_id, name, surname, middle_name, email) => {
    try {
        const [{affectedRows}] = await connect.query(`UPDATE Users SET name = ?, surname = ?, middle_name = ?, email = ? WHERE user_id = ?`, [name, surname, middle_name, email, user_id])
        if(affectedRows != 0) {
            return {
                result: true
            }
        } else {
            throw new Error()
        }
    } catch(error) {
        return {
            result: false,
            message: error.message
        }
    }
}   

module.exports.updateUserRole = async (user_id, role_id) => {
    try {
        const [{affectedRows}] = await connect.query(`UPDATE Users SET role = ? WHERE user_id = ?`, [role_id, user_id])
        if(affectedRows != 0) {
            return {
                result: true
            }
        } else {
            throw new Error()
        }          
    } catch(error) {
        return {
            result: false,
            message: error.message
        }
    }
}   

module.exports.getUserRole = async (user_id) => {
    const [userRole] = await connect.query(`SELECT Roles.name FROM Users JOIN Roles ON Users.role = Roles.role_id WHERE Users.user_id = ?`, [user_id])
    return userRole[0]
}

