const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://database/teams', { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', (error) => console.log('Connected to Database'));

app.use(express.json());
app.use(cors());

const teamRouter = require('./routes/teams');
app.use('/teams', teamRouter);

app.listen(3000, () => console.log('Server Started'));