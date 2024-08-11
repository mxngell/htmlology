const { createPool } = require('mysql2/promise')

const connect = createPool({
    host       : process.env.MYSQL_HOST,
    port       : process.env.MYSQL_PORT,
    user       : process.env.MYSQL_USER,
    password   : process.env.MYSQL_ROOT_PASSWORD,
    database   : process.env.MYSQL_DATABASE_NAME,
})

const getConnect = async () => {
    try {
        await connect.getConnection()
        console.log('Database connection successful'.success) 
    } catch(error) {
        throw error
    }
}

module.exports = { connect, getConnect }