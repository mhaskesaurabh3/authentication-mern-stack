const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/user.modal');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mern-authentication');

app.use(cors());

app.use(express.json());

app.post('/api/register', async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: 'ok' });
  } catch (err) {
    res.json({ status: 'error', error: 'Duplicate email' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      return res.json({ status: 'ok', user: true });
    } else {
      return res.json({ status: 'error', user: false });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(1337, () => {
  console.log('Server started on 1337');
});
