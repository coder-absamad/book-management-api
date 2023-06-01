const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./src/routes/bookRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://absamad:86KPtEdEAlmATsgf@cluster0.9anuj06.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('Connected to MongoDB'));

app.use('/books', bookRoutes);

module.exports = app;
