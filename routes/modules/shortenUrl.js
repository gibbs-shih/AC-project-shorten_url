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
  return Url.create({oldUrl, short})
    .then(res.render('shorten', {short, oldUrl}))
    .catch(error => console.log(error))
})

// short url available when local server running
router.get('/:short', (req, res) => {
  return Url.find({short: req.params.short})
    .then(url => res.redirect(url[0].oldUrl))
    .catch(error => console.log(error))
})

module.exports = router