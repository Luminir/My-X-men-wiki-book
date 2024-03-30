const path = require('path')
const express = require('express')
var morgan = require('morgan')
const { engine } = require ('express-handlebars');
const exp = require('constants');
const app = express()
const port = 3000

// HTTPS logger
app.use(morgan('combined'))

// Template engine
app.engine('.hbs', engine({extname: '.hbs'})); // 'handlebars' = handlebar()
app.set('view engine', '.hbs'); // 'view engine' = handlebars()
app.set('views', path.join(__dirname, "resources/view"))
// console.log("Path: ", path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

// joining __dirname with 'public' directory, means: __dirname == /public/...
app.use(express.static(path.join(__dirname, 'public')))
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})