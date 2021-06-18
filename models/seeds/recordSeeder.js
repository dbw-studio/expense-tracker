const db = require('../../config/mongoose')
const Record = require('../record')

db.once('open', () => {
  Record.create({
    name: '晚餐',
    date: '2021-06-17',
    category: '餐飲食品',
    amount: 250
  },
  {
    name: '早餐',
    date: '2021-06-19',
    category: '餐飲食品',
    amount: 50
  })
  console.log('Record seed done.')
})
