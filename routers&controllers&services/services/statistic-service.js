const { connect } = require('../../models/database')

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

exports.getRating = async () => {
    const [rating] = await connect.query(`
    SELECT Users.user_id as student_id, CONCAT(Users.surname, ' ', Users.name, ' ', Users.middle_name) as fio, SUM(score) as total_score 
    FROM Users 
    LEFT JOIN Statistic ON Statistic.user = Users.user_id
    JOIN Roles ON Users.role = Roles.role_id
    WHERE Roles.name = 'Обучающийся' 
    GROUP BY Users.user_id 
    ORDER BY total_score DESC, user ASC`)
    return rating
}

exports.addStatistic = async (stat_id, user, theme, date, author, note, score) => {
    const [{affectedRows}] = await connect.query(`
    INSERT INTO Statistic (statistic_id, user, theme, date, author, note, score) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`, [stat_id, user, theme, date, author, note, score])
    return affectedRows
}

exports.deleteStatistic = async (stat_id) => {
    const [{affectedRows}] = await connect.query(` DELETE FROM Statistic WHERE statistic_id = ?`, [stat_id])
    return affectedRows
}