// Import the pool object from the PostgreSQL library
const pool = require('../db');

// Define the schema for the users table
const User = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT,
  quote TEXT
);
`;

// Create the users table if it doesn't exist yet
const createUserTable = async () => {
  const client = await pool.connect();

  try {
    await client.query(User);
  } finally {
    client.release();
  }
};

// Export the function to create the users table
module.exports = {
  createUserTable,
};
