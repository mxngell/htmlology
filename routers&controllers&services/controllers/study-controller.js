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

const themesService = require('../services/themes-service')
const { getUser } = require('../services/users-service')

exports.getStudyPage = async (request, response) => {
    try {
        const allThemes = await themesService.getAllThemes()
        response.status(200).render('study', {
            user: request.user,
            allThemes
        })
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}

exports.getTheme = async (request, response) => {
    try {
        const theme = await themesService.getTheme(request.params.id)
        if(!theme) return response.status(404).render('404');
        const {name, surname, middle_name} = await getUser(theme.author)
        response.status(200).render('lesson', {
            user_id: request.user.user_id,
            theme,
            name, surname, middle_name
        })                       
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}

exports.sendAnswer = async (request, response) => {
    try {
        const {title, author} = await themesService.getTheme(request.body.theme_id)
        const {name: authorName, surname: authorSurname, middle_name: authorMiddle_name, email: authorEmail} = await getUser(author)
        const {name: studentName, surname: studentSurname, middle_name: studentMiddle_name} = request.user
        const user_answer = await request.body.answer
        if(!user_answer.trim()) return response.status(200).json({result: false, message: 'Поле с ответом не должно быть пустым'})
        mailer.sendMail({
            to: authorEmail,
            subject: 'Пользователь прислал вам ответ на практическое задание',
            html:`
            <div style="font-family:Arial,sans-serif;background-color:rgb(20,20,20);color:rgb(228,228,228);padding:1rem;border-radius:.5rem;">
                <h1 style="text-align:center">HTML<span style="color:rgb(249,0,59)">OLOGY</span></h1>
                <h2>Уважаемый/ая ${authorName} ${authorMiddle_name}!</h2>
                <p>Пользователь ${studentName} ${studentSurname} ${studentMiddle_name} прислал вам ответ на практическое задание по теме "${title.replace(/</g, '&lt').replace(/>/g, '&gt')}".</p>
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
                authorName,
                authorSurname,
                authorMiddle_name,
                authorEmail
            })
        })            
    } catch (error) {
        console.log('Error message: '.error ,error) 
        response.status(500).render('500')
    }
}