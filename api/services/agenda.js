const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, nombre_alumno, mail_alumno, nombre_profesor, mail_profesor, fecha_hora 
    FROM Agenda LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(agenda){
    const result = await db.query(
      `INSERT INTO Agenda 
      (nombre_alumno, mail_alumno, nombre_profesor, mail_profesor, fecha_hora) 
      VALUES 
      ("${agenda.nombre_alumno}", "${agenda.mail_alumno}", "${agenda.nombre_profesor}", "${agenda.mail_profesor}", "${agenda.fecha_hora}")`
    );
  
    let message = 'Error in creating appointment';
  
    if (result.affectedRows) {
      message = 'appointment created successfully';
    }
  
    return {message};
  }

module.exports = {
  getMultiple,
  create
}