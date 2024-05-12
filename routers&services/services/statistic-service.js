const connect = require('../../models/database')

exports.getUserStatistic = async (user_id) => {
    const [statistic] = await connect.query(`
    SELECT Themes.title as themeTitle, note, score
    FROM Statistic 
    JOIN Users ON Users.user_id = Statistic.user 
    JOIN Themes ON Themes.theme_id = Statistic.theme 
    WHERE user = ?`, [user_id])
    return statistic
}