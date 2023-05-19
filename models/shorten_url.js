const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema ({
  oldUrl: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model( 'Url' , urlSchema)