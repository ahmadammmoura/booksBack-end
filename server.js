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

mongoose.connect(`mongodb://localhost:${process.env.DATABASE_URL}/books`, {useNewUrlParser: true, useUnifiedTopology: true});




const PORT = process.env.PORT || 3001;

app.get('/books', (request, response) => {

  ModuleUser.doSomething(request,response)
  // TODO:
  // STEP 1: get the jwt from the headers
  // STEP 2. use the jsonwebtoken library to verify that it is a valid jwt
  // jsonwebtoken dock - https://www.npmjs.com/package/jsonwebtoken
  // STEP 3: to prove that everything is working correctly, send the opened jwt back to the front-end
  // response.send(kittens)
});




app.listen(PORT, () => console.log(`listening on ${PORT}`));
