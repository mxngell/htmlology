// IMPORTS

require('dotenv').config({path: 'config/.env'})

const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const routers = require('./routers&controllers&services/routers/index')

const { setTheme } = require('colors');
setTheme({
    info: ['bgCyan', 'brightWhite', 'bold'],
    success: ['bgGreen', 'brightWhite', 'bold'],
    warn: ['bgYellow', 'brightWhite', 'bold'],
    error: ['bgRed', 'brightWhite', 'bold'],
});

// MIDDLEWARES

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(
    "/libs",
    express.static(path.join(__dirname, "public/assets/libs/"))
)
app.use(
    "/modules",
    express.static(path.join(__dirname, "node_modules/"))
)
app.use(routers);

// SERVER

const PORT = process.env.NODE_PORT
const HOST = process.env.DB_HOST

app.listen(PORT, () => {
    console.log(`Sever started: http://localhost:${PORT}`.info);
})