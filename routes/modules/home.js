const express = require('express')
const router = express.Router()
const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => {
      Category.find()
        .lean()
        .then(categories => res.render('index', { records, categories }))
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

module.exports = router
