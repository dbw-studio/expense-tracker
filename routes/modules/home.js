const express = require('express')
const router = express.Router()
const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => {
      let totalAmount = 0

      records.forEach(record => {
        totalAmount += record.amount
      })

      Category.find()
        .lean()
        .then(categories => res.render('index', { records, categories, totalAmount }))
        .catch(e => console.log(e))
    })
    .catch(e => console.log(e))
})

module.exports = router
