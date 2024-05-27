const express = require('express')
const router = express.Router()

const authenticateJWT = require('../../middlewares/authenticateJWT-middleware.js')
const roleMiddleware = require('../../middlewares/role-middleware.js')

const registrationRouter = require('./registration-router.js')
const authorizationRouter = require('./authorization-router.js')
const homeRouter = require('./home-router.js')
const profileRouter = require('./profile-router.js')

const editorRouter = require('./editor-router.js')
const studyRouter = require('./study-router.js')
const adminRouter = require('./admin-router.js')
const statisticRouter = require('./statistic-router.js')

const usersRouter = require('./users-router.js')
const themesRouter = require('./themes-router.js')

router.use('/registration', registrationRouter)
router.use('/authorization', authorizationRouter)
router.use('/home', authenticateJWT, homeRouter)
router.use('/profile', authenticateJWT, profileRouter)

router.use('/editor', authenticateJWT, roleMiddleware(['Преподаватель']), editorRouter)
router.use('/study', authenticateJWT, roleMiddleware(['Обучающийся']), studyRouter)
router.use('/admin', authenticateJWT, roleMiddleware(['Администратор']), adminRouter)
router.use('/statistic', authenticateJWT, roleMiddleware(['Преподаватель']), statisticRouter)

router.use('/themes', authenticateJWT, roleMiddleware(['Преподаватель']), themesRouter)
router.use('/users', authenticateJWT, roleMiddleware(['Администратор']), usersRouter)

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