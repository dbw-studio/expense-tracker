const express = require('express')
const router = express.Router()
const Category = require('../../models/category')

router.get('/new', (req, res) => {
  Category.find()
    .lean()
    .then(categories => res.render('new', { categories }))
    .catch(error => console.log(error))
})

router.get('/edit', (req, res) => {
  Category.find()
    .lean()
    .then(categories => res.render('edit', { categories }))
    .catch(error => console.log(error))
})

module.exports = router
