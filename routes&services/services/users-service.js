const connect = require('../../models/database')

module.exports.getAllUsers = async () => {
    const [users] = await connect.query(`SELECT * FROM users WHERE role NOT IN (SELECT role_id FROM roles WHERE role_id = 3)`)
    const [roles] = await connect.query(`SELECT * FROM roles WHERE role_id NOT IN (SELECT role_id FROM roles WHERE role_id = 3)`)
    return {
        users,
        roles
    }
}

module.exports.getUser = async (user_id) => {
    const [user] = await connect.query(`SELECT * FROM users WHERE user_id = ?`, [user_id])
    return user[0]
}

module.exports.deleteUser = async (user_id) => {
    try {
        const [{affectedRows}] = await connect.query(`DELETE FROM users WHERE user_id = ?`, [user_id])
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
        const [{affectedRows}] = await connect.query(`UPDATE users SET role = ? WHERE user_id = ?`, [role_id, user_id])
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
    const [userRole] = await connect.query(`SELECT roles.name FROM users JOIN roles ON users.role = roles.role_id WHERE users.user_id = ?`, [user_id])
    return userRole[0]
}

