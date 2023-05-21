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
  const input = req.body.inputUrl
  return Url.find({ oldUrl: input })
    .then(url => {
      // existing url > get same short url
      if (url.length) {
        res.render('shorten', { short: url[0].short, oldUrl: input })
      } else {
        // new url > get short url
        let short = ''
        for (let i = 0; i < 5; i ++) {
          short += sample(range)
        }
        Url.create({oldUrl: input, short})
          .then(() => res.render('shorten', { short, oldUrl: input }))
          .catch(error => console.log(error))
      }
    })
    .catch(error => console.log(error))
})

// short url available when local server running
router.get('/:short', (req, res) => {
  return Url.find({short: req.params.short})
    .then(url => res.redirect(url[0].oldUrl))
    .catch(error => console.log(error))
})

module.exports = router