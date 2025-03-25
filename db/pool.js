const { Pool } = require("pg");

module.exports = new Pool ({
    host: "localhost",
    user: "postgres",
    database: "top_users",
    password: "Patil@987",
    port: 5432
})