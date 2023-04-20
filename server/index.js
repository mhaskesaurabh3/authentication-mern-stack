const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors);

app.use(express.json());

app.get('./api/register', (req, res) => {
  res.send('Hello World');
});

app.listen(1337, () => {
  console.log('Server started on 1337');
});
