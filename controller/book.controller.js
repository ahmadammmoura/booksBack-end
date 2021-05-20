"use strict";

const user = require("../module/user.model");

const getAllBooks = async (req, res) => {
  const { Email } = req.query;

  await user.UserModel.find({ Email: Email }, function (err, users) {
    
    if (err) return console.error(err);
    res.send(users);
  });
};

const addNewBook = async (req, res) => {
  const { userEmail, BookName, Bookstatus, BookDescription } = req.body;

  await user.UserModel.find({ Email: userEmail }, function (err, user) {
    if (err) return console.error(err);
    const newBook = {
      name: BookName,
      description: BookDescription,
      status: Bookstatus,
    };

    user[0].books.push(newBook);
    user[0].save();
    res.send(user[0]);
  });
};

const deleteBooks = async (req, res) => {
  const index = Number(req.params.index);
  const { email } = req.query;

  await user.UserModel.find({ Email: email }, (err, userBooks) => {
    const newBookArry = userBooks[0].books.filter((book, i) => {
      return i !== index;
    });
    userBooks[0].books = newBookArry;
    userBooks[0].save();

    res.send("hellooooooooooo");
  });
};

const updateBook = async (req, res) => {
  const { userEmail, index, BookName, Bookstatus, BookDescription } = req.body;

  await user.UserModel.find({ Email: userEmail }, (err, user) => {
    if (err) console.log(err);

    user[0].books[index].name = BookName;
    user[0].books[index].description = BookDescription;
    user[0].books[index].status = Bookstatus;

    user[0].save();
    res.send(user[0]);
  });
};

module.exports = {
  getAllBooks: getAllBooks,
  addNewBook: addNewBook,
  deleteBooks: deleteBooks,
  updateBook: updateBook,
};
