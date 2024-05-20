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

exports.deleteUser = async (user_id) => {
    try {
        const [{affectedRows}] = await connect.query(`DELETE FROM Users WHERE user_id = ?`, [user_id])
        if(affectedRows != 0) {
            return {
                result: true
            }
        } else {
            throw new Error('Ошибка при удалении пользователя')
        }
    } catch(error) {
        return {
            result: false,
            message: error.message
        }
    }

}

exports.updateUserData = async (user_id, name, surname, middle_name, email) => {
    try {
        const [{affectedRows}] = await connect.query(`UPDATE Users SET name = ?, surname = ?, middle_name = ?, email = ? WHERE user_id = ?`, [name, surname, middle_name, email, user_id])
        if(affectedRows != 0) {
            return {
                result: true
            }
        } else {
            throw new Error('Ошибка при обновлении личных данных')
        }
    } catch(error) {
        return {
            result: false,
            message: error.message
        }
    }
}   

exports.updateUserRole = async (user_id, role_id) => {
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
