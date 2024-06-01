const connect = require('../../models/database')

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

exports.checkTitle = async (title) => {
    const [result] = await connect.query(`SELECT theme_id FROM Themes WHERE title = ?`, [title])
    return result[0]
}

exports.addTheme = async (theme_id, title, description, theory, task, author) => {
    const [{affectedRows}] = await connect.query(`
    INSERT INTO Themes (theme_id, title, description, theory, task, author) 
    VALUES (?, ?, ?, ?, ?, ?)`, [theme_id, title, description, theory, task, author])
    return affectedRows

}

exports.updateTheme = async (theme_id, title, description, theory, task) => {
    const [{affectedRows}] = await connect.query(`
    UPDATE Themes SET title = ?, description = ?, theory = ?, task = ? 
    WHERE theme_id = ?`, [title, description, theory, task, theme_id])
    return affectedRows
} 

exports.deleteTheme = async (theme_id) => {
    const [{affectedRows}] = await connect.query(`
    DELETE FROM Themes 
    WHERE theme_id = ?`, [theme_id])
    return affectedRows
}
