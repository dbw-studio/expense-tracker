const db = require('../../config/mongoose')
const Record = require('../record')

db.once('open', () => {
  Record.create({
    name: '晚餐',
    date: '2021-06-19',
    category: '餐飲食品',
    amount: 150
  },
  {
    name: '早餐',
    date: '2021-06-27',
    category: '餐飲食品',
    amount: 55
  },
  {
    name: '6月房貸',
    date: '2021-06-06',
    category: '家居物業',
    amount: 35000
  },
  {
    name: '7月房貸',
    date: '2021-07-06',
    category: '家居物業',
    amount: 35000
  }).then(() => {
    console.log('Record seed done.')
    return db.close()
  }).then(() => {
    console.log('Database connection is closed.')
  })
})
