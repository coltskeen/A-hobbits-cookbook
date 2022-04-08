const { Pool } = require("pg");

const pool = new Pool ({
    // database: "hobbit_cookbook"
    connectionString: process.env.DATABASE_URL,
    // ssl: {
    //     rejectUnauthorized: false,
    // },
});

module.exports = pool;