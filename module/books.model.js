"use strict";

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: String,
});
const BooksModel = mongoose.model("books", bookSchema);

module.exports = {
  bookSchema: bookSchema,
  BooksModel: BooksModel,
};
