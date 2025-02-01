import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: "stixmed-prod.c8du268ac8v3.us-east-1.rds.amazonaws.com",
  user: "harleykun",
  password: "ULOa18(:`2P9",
  database: "stixmed",
  port: "3306",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;