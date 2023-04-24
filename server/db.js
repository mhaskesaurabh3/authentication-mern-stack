const { Pool } = require('pg');

// Create a connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'react-auth',
  password: 'root',
  port: 5432, // or the port where your database is running
});

module.exports = pool;
