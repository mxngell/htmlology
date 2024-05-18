const { getUserStatistic } = require('../services/statistic-service')

exports.getUserStat = async (request, response) => {
    try {
        const userStatistic = await getUserStatistic(request.params.id)
        response.status(200).json(userStatistic)
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}