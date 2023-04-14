const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: 3000
});

const app = express();

app.use(cors());
app.use(express.json());

app.get('/getConsultas', (req, res) => {
  pool.query('SELECT * FROM agenda', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/createConsulta', (req, res) => {
  const { nombre_alumno, mail_alumno, nombre_profesor, mail_profesor, fecha_hora } = req.body;
  const sql = `INSERT INTO agenda (nombre_alumno, mail_alumno, nombre_profesor, mail_profesor, fecha_hora) VALUES ('${nombre_alumno}', '${mail_alumno}', '${nombre_profesor}', '${mail_profesor}', '${fecha_hora}')`;
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.json({
      message: 'Cita creada satisfactoriamente'
    });
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3');
});