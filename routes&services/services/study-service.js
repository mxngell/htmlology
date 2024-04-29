const connect = require('../../models/database')

module.exports.getAllThemes = async () => {
    const [themes] = await connect.query(`SELECT * FROM themes`)
    return themes
}

module.exports.getTheme = async (theme_id) => {
    const [theme] = await connect.query(`SELECT * FROM themes WHERE theme_id = ?`, [theme_id])
    return theme[0]
}

module.exports.getAuthorsThemes = async (author_id) => {
    const [themes] = await connect.query(`SELECT * FROM themes WHERE author = ?`, [author_id])
    return themes
}

module.exports.addTheme = async (title, description, theory, task, author) => {
    try {
        const [check_title] = await connect.query(`SELECT theme_id FROM themes WHERE title = ?`, [title])
        if(!check_title.length) { 
            await connect.query(`INSERT INTO Themes (theme_id, title, description, theory, task, author) VALUES (NULL, ?, ?, ?, ?, ?)`, [title, description, theory, task, author])
            return {
                result: true
            }
        } else {
            throw new Error('Тема с таким названием уже существует')
        }
    } catch(error) {
        return {
            result: false,
            message: error.message,
        }
    }
}

module.exports.deleteTheme = async (theme_id) => {
    try {
        const [{affectedRows}] = await connect.query(`DELETE FROM themes WHERE theme_id = ?`, [theme_id])
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
