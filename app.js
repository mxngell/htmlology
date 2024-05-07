// IMPORTS

require('dotenv').config({path: 'config/.env'})

const express = require('express')
const app = express()
const path = require("path")
const session = require('express-session')
const routers = require('./routers&services/routers/index')

const colors = require('colors');
colors.setTheme({
    info: ['bgCyan', 'brightWhite', 'bold'],
    success: ['bgGreen', 'brightWhite', 'bold'],
    warn: ['bgYellow', 'brightWhite', 'bold'],
    error: ['bgRed', 'brightWhite', 'bold'],
});

app.set('view engine', 'ejs')

// MIDDLEWARES

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}))

app.use(
    "/libs",
    express.static(path.join(__dirname, "public/assets/libs/"))
)
app.use(
    "/module",
    express.static(path.join(__dirname, "node_modules/"))
)
app.use(routers);

// SERVER

const PORT = process.env.DB_PORT
const HOST = process.env.DB_HOST

app.listen(PORT, () => {
    console.log(`Sever started: http://${HOST}:${PORT}`.success);
})