/*
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
    id SERIAL PRIMARY KEY,
    username VARCHAR ( 255 )
);

INSERT INTO usernames (username)
VALUES
    ('Brian'),
    ('Odin'),
    ('Damon');
`;

async function main () {
    console.log("seeding...");
    const client = new Client({
        connectionString: "postgresql://postgres:Patil@987@localhost:5432/top_users",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
*/
// #! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

// INSERT INTO usernames (username) 
// VALUES
//   ('Bryan'),
//   ('Odin'),
//   ('Damon');

// SELECT * FROM usernames WHERE username LIKE '%sup%';

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
