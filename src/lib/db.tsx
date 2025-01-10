import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '184.168.114.4',
  user: 'ewjkhfbnhef',
  password: '%GWcf.=E@Kmx',
  database: 'stones',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;