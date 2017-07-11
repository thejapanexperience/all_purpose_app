const mongoose = require('mongoose')

// can set validation in the schema.
const burgerSchema = new mongoose.Schema({
  Name: { type: String },
  createdAt: { type: Date, default:Date.now },
  Id: {type: Number},
  Age: {type: Number}
})

const Burger = mongoose.model('Burger', burgerSchema)

module.exports = Burger;

// comes prebuilt with all the cool methods

// METHODS

// find
// findOne
// findById
// FindOneAndUpdate
// FindOneAndRemove
// FindByIdAndRemove

// etc
