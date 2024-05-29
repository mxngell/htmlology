const connect = require('../../models/database')

exports.getUserStatistic = async (user_id) => {
    const [statistic] = await connect.query(`
    SELECT statistic_id, Themes.title as themeTitle,  Users.surname as authorSurname, Users.name as authorName, Users.middle_name as authorMidName, date, note, score
    FROM Statistic 
    JOIN Users ON Users.user_id = Statistic.author 
    JOIN Themes ON Themes.theme_id = Statistic.theme 
    WHERE user = ?
    ORDER BY date DESC`, [user_id])
    return statistic
}

exports.getUsersStatistic = async (author_id) => {
    const [statistic] = await connect.query(`
    SELECT statistic_id, Users.name, Users.surname, Users.email, Themes.title as themeTitle, date, note, score
    FROM Statistic
    JOIN Users ON Users.user_id = Statistic.user 
    JOIN Themes ON Themes.theme_id = Statistic.theme
    WHERE Statistic.author = ?
    ORDER BY date DESC`, [author_id])
    return statistic
}

exports.deleteStatistic = async (stat_id) => {
    const [statistic] = await connect.query(` DELETE FROM Statistic WHERE statistic_id = ?`, [stat_id])
    return statistic.affectedRows
}