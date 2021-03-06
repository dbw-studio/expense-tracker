const db = require('../../config/mongoose')
const Category = require('../category')

db.once('open', () => {
  Category.create({
    category: '家居物業',
    icon: '<i class="fas fa-home"></i>'
  },
  {
    category: '交通出行',
    icon: '<i class="fas fa-shuttle-van"></i>'
  },
  {
    category: '休閒娛樂',
    icon: '<i class="fas fa-grin-beam"></i>'
  },
  {
    category: '餐飲食品',
    icon: '<i class="fas fa-utensils"></i>'
  },
  {
    category: '其他',
    icon: '<i class="fas fa-pen"></i>'
  }).then(() => {
    console.log('Category seed done.')
    return db.close()
  }).then(() => {
    console.log('Database connection is closed.')
  })
})
