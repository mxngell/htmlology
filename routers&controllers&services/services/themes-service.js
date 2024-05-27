const connect = require('../../models/database')
const ShortUniqueId = require('short-unique-id')
const { randomUUID } = new ShortUniqueId({ length: 7 });

exports.getAllThemes = async () => {
    const [themes] = await connect.query(`SELECT * FROM Themes ORDER BY title`)
    return themes
}

exports.getTheme = async (theme_id) => {
    const [theme] = await connect.query(`SELECT * FROM Themes WHERE theme_id = ?`, [theme_id])
    return theme[0]
}

exports.getAuthorThemes = async (author_id) => {
    const [themes] = await connect.query(`SELECT * FROM Themes WHERE author = ? ORDER BY title`, [author_id])
    return themes
}

exports.addTheme = async (title, description, theory, task, author) => {
    try {
        const [check_title] = await connect.query(`SELECT theme_id FROM Themes WHERE title = ?`, [title])
        if(!check_title.length) { 
            const theme_id = randomUUID()
            await connect.query(`
                INSERT INTO Themes (theme_id, title, description, theory, task, author) 
                VALUES (?, ?, ?, ?, ?, ?)`, [theme_id, title, description, theory, task, author])
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

exports.updateTheme = async (theme_id, title, description, theory, task) => {
    try {
        const [{affectedRows}] = await connect.query(`
        UPDATE Themes SET title = ?, description = ?, theory = ?, task = ? WHERE theme_id = ?`, [title, description, theory, task, theme_id])
        if(affectedRows != 0) {
            return {
                result: true
            }
        } else {
            throw new Error('Ошибка при обновлении темы')
        }
    } catch(error) {
        return {
            result: false,
            message: error.message
        }
    }
} 

exports.deleteTheme = async (theme_id) => {
    try {
        const [{affectedRows}] = await connect.query(`DELETE FROM Themes WHERE theme_id = ?`, [theme_id])
        if(affectedRows != 0) {
            return {
                result: true
            }
        } else {
            throw new Error('Ошибка при удалении темы')
        }
    } catch(error) {
        return {
            result: false,
            message: error.message
        }
    }
}
