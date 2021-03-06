const path = require('path')

const express = require('express')
const hbs = require('hbs')
const cors = require('cors')

const app = express()

const AppRouter = require('./src/routes/app')
const PagesRouter = require('./src/routes/pages')
const SwaggerRouter = require('./src/swaggercfg')

const publicServerDirectoryPath = path.join(__dirname, './public')
const root = path.join(__dirname, 'client', 'build')
const viewPath = path.join(__dirname, './templates/views')
const partialPath = path.join(__dirname, './templates/partials')

app.use(cors())

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicServerDirectoryPath))
app.use(express.static(root))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(SwaggerRouter)
app.use(AppRouter)
app.use(PagesRouter)


module.exports = app
