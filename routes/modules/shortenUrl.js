const express = require('express')
const router = express.Router()
const Url = require('../../models/shorten_url')

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
  const oldUrl = req.body.inputUrl
  let short = ''
  for (let i = 0; i < 5; i ++) {
    short += sample(range)
  }
  return Url.create({oldUrl, short: `https://shorten_url/${short}`})
    .then(res.render('shorten', {short, oldUrl}))
    .catch(error => console.log(error))
})

module.exports = router