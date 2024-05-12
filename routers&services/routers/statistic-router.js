const express = require('express')
const router = express.Router()

const { getUserStatistic } = require('../services/statistic-service')

router.get('/:id' , async (request, response) => {
    try {
        const userStatistic = await getUserStatistic(request.params.id)
        response.status(200).json(userStatistic)
    } catch (error) {
        console.log('Error message:'.error ,error) 
        response.status(500).render('500')
    }
})

module.exports = router