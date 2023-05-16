const express = require('express')
const router = express.Router()

const home = require('./modules/home')
router.use("/", home)

const shortenUrl = require('./modules/shortenUrl')
router.use('/shortenUrl', shortenUrl)

module.exports = router