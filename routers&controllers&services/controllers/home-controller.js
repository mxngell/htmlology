exports.getHomePage = async (request, response) => {
    try {
        response.status(200).render('home', {
            user: request.user
        })
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}