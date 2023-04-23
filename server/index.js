const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/user.modal');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/full-mern-stack-video');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB!');
});

app.use(cors());

app.use(express.json());

app.post('/api/register', async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: 'ok' });
  } catch (error) {
    console.log(error);
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      res.json({ status: 'ok', user: true });
    } else {
      res.json({ status: 'error', user: false });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(1337, () => {
  console.log('Server started on 1337');
});
