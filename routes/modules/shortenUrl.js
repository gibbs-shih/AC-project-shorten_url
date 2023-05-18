const express = require('express')
const router = express.Router()

const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = lowerCaseLetters.toUpperCase()
const numbers = '1234567890'
const range = (lowerCaseLetters.split('').concat(upperCaseLetters.split(''))).concat([...numbers])

// random pickup up 
function sample (array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

router.post('/', (req, res) => {
  let short = ''
  for (let i = 0; i < 5; i ++) {
    short += sample(range)
  }
  res.render('shorten')
})

module.exports = router