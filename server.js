'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const ModuleUser = require('./module/user');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb://localhost:${process.env.DATABASE_URL}/books`, { useNewUrlParser: true, useUnifiedTopology: true });




const PORT = process.env.PORT || 3001;

app.get('/books', ModuleUser.doSomething);

app.delete('/books/:index', ModuleUser.deleteBooks);

console.log(ModuleUser.deleteBooks)

app.listen(PORT, () => console.log(`listening on ${PORT}`));
