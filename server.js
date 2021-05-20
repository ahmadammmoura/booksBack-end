"use strict";

require("dotenv").config();

const express = require("express"),
  cors = require("cors"),
  jwt = require("jsonwebtoken"),
  jwksClient = require("jwks-rsa"),
  Indexcontroller = require("./controller/index.controller"),
  BookController = require("./controller/book.controller"),
  bookController = require("./controller/book.controller"),
  PORT = process.env.PORT || 3001,
  app = express();

app.use(cors());
app.use(express.json());
///// endPoints
app.get("/", Indexcontroller.homePage);
app.get("/books", BookController.getAllBooks);
app.post("/books", BookController.addNewBook);
app.put("/books", BookController.updateBook);
app.delete("/books/:index", bookController.deleteBooks);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
