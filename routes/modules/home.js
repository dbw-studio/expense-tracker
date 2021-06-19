const express = require('express')
const router = express.Router()
const Category = require('../../models/category')
const Record = require('../../models/record')
const category = ''

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
        .then(categories => res.render('index', { records, categories, totalAmount, category }))
        .catch(e => console.log(e))
    })
    .catch(e => console.log(e))
})

router.post('/filter', (req, res) => {
  const category = req.body.filteredCategory
  let filteredRecords = []
  let totalAmount = 0
  Record.find()
    .lean()
    .then(records => {
      records.forEach(record => {
        filteredRecords = records.filter(record => record.category === category)
      })

      filteredRecords.forEach(filteredRecord => {
        totalAmount += filteredRecord.amount
      })

      Category.find().lean()
        .then(categories => {
          res.render('index', { records: filteredRecords, categories, totalAmount, category })
        })
    })
    .catch(e => console.log(e))
})

module.exports = router
