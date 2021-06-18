const express = require('express')
const router = express.Router()
const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/', (req, res) => {
  const categories = Category.find()
    .lean()
    .then(categories => categories)

  Record.find()
    .lean()
    .then(records => res.render('index', { records, categories }))
    .catch(error => console.log(error))
})

module.exports = router
