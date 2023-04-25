const express = require('express');
const app = express();
const cors = require('cors');
const { createUserTable } = require('./models/user.modal');
const jwt = require('jsonwebtoken');
const secret = 'reactAuth';
const bcrypt = require('bcryptjs');
const pool = require('./db');

// Create the users table if it doesn't exist yet
createUserTable();

app.use(cors());
app.use(express.json());

// app.post('/api/register', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert a new user into the users table
//     const queryText =
//       "INSERT INTO users (name, email, password) VALUES ($1, $2, COALESCE($3, ''))";
//     const values = [name, email, hashedPassword];
//     await pool.query(queryText, values);

//     res.json({ status: 'ok' });
//   } catch (err) {
//     res.json({ status: 'error', error: 'Duplicate email' });
//   }
// });

app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if the user already exists in the database
    const userQueryText = 'SELECT * FROM users WHERE email = $1';
    const userValues = [email];
    const userResult = await pool.query(userQueryText, userValues);

    if (userResult.rowCount > 0) {
      // User already exists, so generate a JWT token and return it
      const user = userResult.rows[0];
      const payload = {
        name: user.name,
        email: user.email,
      };
      const token = jwt.sign(payload, secret);
      return res.json({ status: 'ok', token });
    } else {
      // User doesn't exist, so insert a new user into the users table
      const queryText =
        "INSERT INTO users (name, email, password) VALUES ($1, $2, COALESCE($3, ''))";
      const values = [name, email, hashedPassword];
      await pool.query(queryText, values);

      const payload = {
        name: name,
        email: email,
      };
      const token = jwt.sign(payload, secret);
      return res.json({ status: 'ok', token });
    }
  } catch (err) {
    res.json({ status: 'error', error: 'Error registering user' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists in the users table
    const queryText = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await pool.query(queryText, values);

    if (result.rowCount > 0) {
      const user = result.rows[0];
      const isValidPassword = await bcrypt.compare(password, user.password);

      if (isValidPassword) {
        const payload = {
          name: user.name,
          email: user.email,
        };
        const token = jwt.sign(payload, secret);
        return res.json({ status: 'ok', token });
      } else {
        return res.json({ status: 'error', user: false });
      }
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
