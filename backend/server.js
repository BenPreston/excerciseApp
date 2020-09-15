const express = require('express');
// const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 2500;

const uri = process.env.DB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Mongo connection established');
});

connection.on('error', (error) => {
  console.log(`Error of: ${error}`);
});

const excerciseRoutes = require('./routes/excercises');
const userroutes = require('./routes/users');

app.use('/excercises', excerciseRoutes);
app.use('/users', userroutes);

app.listen(port, () => {
  console.log(`App started on ${port}`);
});
