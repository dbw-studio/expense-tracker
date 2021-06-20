const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3000

// Require handlebars and just-handlebars-helpers
const Handlebars = require('handlebars')
const hbsHelpers = require('just-handlebars-helpers')

// Register just-handlebars-helpers with handlebars
hbsHelpers.registerHelpers(Handlebars)

const app = express()
const routes = require('./routes')
require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is listening localhost:${PORT}`)
})
