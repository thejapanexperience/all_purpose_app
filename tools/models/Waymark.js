const mongoose = require('mongoose')

const waymarkSchema = new mongoose.Schema({
  Name: { type: String },
  createdAt: { type: Date, default:Date.now },
  Id: {type: Number},
  Age: {type: Number}
})

const Waymark = mongoose.model('Waymark', waymarkSchema)

module.exports = Waymark;
