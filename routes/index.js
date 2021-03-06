const express = require('express')
const router = express.Router()
const home = require('../routes/modules/home')
const record = require('./modules/record')

router.use('/', home)
router.use('/records', record)

module.exports = router
