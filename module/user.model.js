'use strict'


const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:${process.env.DATABASE_URL}/books`, {useNewUrlParser: true, useUnifiedTopology: true});

const books = require('./books.model')
  
const user = new mongoose.Schema({
    Email: String,
    books: [books.bookSchema]
});
  
  
const UserModel = mongoose.model('user', user);




module.exports = {
    UserModel:UserModel
};