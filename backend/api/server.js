const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://database/', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', (error) => console.log('Connected to Database'));

app.use(express.json());
app.use(cors());

const teamRouter = require('./routes/teams');
const gameRouter = require('./routes/games');
const predictionRouter = require('./routes/predictions')
app.use('/teams', teamRouter);
app.use('/games', gameRouter);
app.use('/predictions', predictionRouter);

app.listen(3000, () => console.log('Server Started'));