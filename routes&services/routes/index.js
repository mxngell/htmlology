const express = require('express')
const router = express.Router()

const authenticateJWT = require('../../middlewares/authenticate-JWT-middleware.js')
const registrationRoutes = require('../../routes&services/routes/registration-routes.js')
const authorizationRoutes = require('../../routes&services/routes/authorization-routes.js')
const usersRoutes = require('../../routes&services/routes/users-routes.js')
const homeRoutes = require('../../routes&services/routes/home-routes.js')
const profileRoutes = require('../../routes&services/routes/profile-routes.js')
const adminRoutes = require('../../routes&services/routes/admin-routes.js')
const studyRoutes = require('../../routes&services/routes/study-routes.js')
const editorRoutes = require('../../routes&services/routes/editor-routes.js')

router.use('/registration', registrationRoutes)
router.use('/authorization', authorizationRoutes)
router.use('/home', authenticateJWT, homeRoutes)
router.use('/profile', authenticateJWT, profileRoutes)
router.use('/editor', authenticateJWT, editorRoutes)
router.use('/study', authenticateJWT, studyRoutes)
router.use('/users', authenticateJWT, usersRoutes)
router.use('/admin', authenticateJWT, adminRoutes)

router.get('/', (request, response) => {
    if(request.session.token) {
        response.status(200).redirect('/home')   
    } else {
        response.status(200).render('guest') 
    }
})

router.use((request, response) => {
    response.status(404).render('404');
});

module.exports = router