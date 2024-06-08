const { getRating } = require('../services/statistic-service')

exports.getRatingPage = async (request, response) => {
    try {
        const rating = await getRating()
        response.status(200).render('rating', {
            user: request.user,
            rating
        })
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}