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

      let noRecord = false
      if (records.length === 0) {
        noRecord = true
      }

      Category.find()
        .lean()
        .then(categories => {
          records.forEach(record => {
            totalAmount += record.amount

            categories.forEach(category => {
              if (record.category === category.category) {
                record.category = category.icon
              }
            })
          })

          res.render('index', { records, categories, totalAmount, category, noRecord })
        })
        .catch(e => console.log(e))
    })
    .catch(e => console.log(e))
})

router.post('/filter', (req, res) => {
  const category = req.body.filteredCategory
  let filteredRecords = []
  let totalAmount = 0
  let noRecord = false
  Record.find()
    .lean()
    .then(records => {
      Category.find().lean()
        .then(categories => {
          records.forEach(record => {
            filteredRecords = records.filter(record => record.category === category)
          })

          filteredRecords.forEach(filteredRecord => {
            totalAmount += filteredRecord.amount

            categories.forEach(category => {
              if (filteredRecord.category === category.category) {
                filteredRecord.category = category.icon
              }
            })
          })

          if (filteredRecords.length === 0) {
            noRecord = true
          }
          res.render('index', { records: filteredRecords, categories, totalAmount, category, noRecord })
        })
    })
    .catch(e => console.log(e))
})

module.exports = router
