'use strict';

require('dotenv').config();

const express = require('express'),
      cors = require('cors'),
      jwt = require('jsonwebtoken'),
      jwksClient = require('jwks-rsa'),
      ModuleUser = require('./module/user'),
      PORT = process.env.PORT || 3001,
      app = express()

app.use(cors());
app.use(express.json())
///// endPoints
app.get('/books', ModuleUser.getAllUsers);
app.post('/books', ModuleUser.addNewBook);
app.delete('/books/:index', ModuleUser.deleteBooks);


app.listen(PORT, () => console.log(`listening on ${PORT}`));
