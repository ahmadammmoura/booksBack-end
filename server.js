'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const ModuleUser = require('./module/user');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json())
///// endPoints
app.get('/books', ModuleUser.getAllUsers);
app.post('/newBook', ModuleUser.addNewBook);



app.listen(PORT, () => console.log(`listening on ${PORT}`));
