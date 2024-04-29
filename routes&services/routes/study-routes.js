const express = require('express')
const router = express.Router()

const nodemailer = require("nodemailer");
const mailer = nodemailer.createTransport(
    {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_LOGIN,
            pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false
        }
    },
    {
        from: `HTMLOLOGY <${process.env.EMAIL_LOGIN}>`,
    }
);

const usersService = require('../services/users-service')
const studyService = require('../services/study-service')

router.get('/', async (request, response) => {
    try {
        const user = await usersService.getUser(response.decodedUserToken.id)
        const allThemes = await studyService.getAllThemes()
        response.status(200).render('study', {
            user,
            allThemes
        })
    } catch (error) {
        response.status(500).render('500', {error})
    }
})

router.get('/get-all-themes', async (request, response) => {
    try {
        const allThemes = await studyService.getAllThemes()
        response.status(200).json(allThemes)
    } catch (error) {
        response.status(500).render('500', {error})
    }
})

router.get('/:id', async (request, response) => {
    try {
        const theme = await studyService.getTheme(request.params.id)
        if(theme) {
            const {name, surname, middle_name} = await usersService.getUser(theme.author)
            const {user_id} = await usersService.getUser(response.decodedUserToken.id)
            response.status(200).render('lesson', {
                user_id,
                theme,
                name, surname, middle_name
            })            
        } else {
            response.status(404).render('404');
        }            
    } catch (error) {
        response.status(500).render('500', {error})
    }
})

router.post('/send-answer', async (request, response) => {
    try {
        const {title, author} = await studyService.getTheme(request.body.theme_id)
        const {name, surname, middle_name, email} = await usersService.getUser(author)
        const user = await usersService.getUser(request.body.user_id)
        const user_answer = await request.body.answer
        if(user_answer.trim() !== '') {
            mailer.sendMail({
                to: email,
                subject: 'Пользователь прислал вам ответ на практическое задание',
                html:`
                <div style="font-family:Arial,sans-serif;background-color:rgb(20,20,20);color:rgb(228,228,228);padding:1rem;border-radius:.5rem;">
                    <h1 style="text-align:center">HTML<span style="color:rgb(249,0,59)">OLOGY</span></h1>
                    <h2>Уважаемый/ая ${name} ${middle_name}!</h2>
                    <p>Пользователь ${user.surname} ${user.name} ${user.middle_name} прислал вам ответ на практическое задание по теме "${title.replace(/</g, '&lt').replace(/>/g, '&gt')}".</p>
                    <div style="background-color:orange;padding:.8rem;border-radius:.5rem;display:inline-flex;align-items:center;gap:.5rem;color:rgb(228,228,228);">
                        *Файл с ответом пользователя прикреплен к данному письму    
                    </div>
                    <hr>
                    <p style="text-align:center;">С уважением, HTMLOLOGY!</p>
                </div>              
                `,
                attachments: [
                    {
                        filename: 'ANSWER.txt',
                        content: user_answer
                    }
                ]
            }, (error) => {
                if(error) throw error
                response.status(200).json({
                    result: true,
                    name,
                    surname,
                    middle_name,
                    email
                })
            })            
        } else {
            response.status(200).json({result: false, message: 'Поле ввода ответа не должно быть пустым'})
        }
    } catch (error) {
        response.status(500).render('500', {error})
    }
})

router.post('/', async (request, response) => {
    try {
        const result = await studyService.addTheme(request.body.title, request.body.description, request.body.theory, request.body.task, request.body.author)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).render('500', {error})
    }
})

router.delete('/', async (request, response) => {
    try {
        const result = await studyService.deleteTheme(request.body.theme_id)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).render('500', {error})
    }
})

module.exports = router