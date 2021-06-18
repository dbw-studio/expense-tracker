const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const routes = require('./routes')
require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(routes)

app.listen(3000, () => {
  console.log('Server is listening localhost:3000')
})
