import React, { useState } from 'react';
import GetConsultas from '../GetConsultas';
import axios from 'axios';
import raw from '../../database/disponsible_horarios.txt';

{/* Input "Database" from the Secretaria FCI about dates*/}
var all_dates = "";
fetch(raw)
  .then(r => r.text())
  .then(text => {
    all_dates = text;
    all_dates = all_dates.split("#");
    for (var i = 0; i < all_dates.length; i++){
      var optionText = all_dates[i].split(";");
      $('#timeselector').append(`<option value="${optionText[1]}"> ${optionText[1]} </option>`);
    }
  
  });

const Picker = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [studentName, setStudentName] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [teacherEmail, setTeacherEmail] = useState('');


  const handleStudentName = (event) => {
    setStudentName(event.target.value);
  }

  const handleTeacherName = (event) => {
      setTeacherName(event.target.value);
  }

  const handleStudentEmail = (event) => {
      setStudentEmail(event.target.value);
  }

  const handleTeacherEmail = (event) => {
      setTeacherEmail(event.target.value);
  }

  //const handleSubmit = () => {
  //  event.preventDefault();
  //  alert('Se ha guardado la información exitosamente');
  //  console.log('Información guardada');
  //  console.log(`Nombre del estudiante: ${studentName}, Nombre del profesor: ${teacherName}, Email del estudiante: ${studentEmail}, Email del profesor: ${teacherEmail}`);
  //  console.log(`Date: ${date}, Time: ${time}`);
  //};

  const handleSubmit = () => {
    event.preventDefault();
    const data = {
        nombre_alumno: studentName,
        mail_alumno: studentEmail,
        nombre_profesor: teacherName,
        mail_profesor: teacherEmail,
        fecha_hora: date + ' ' + time
    }
    alert('Se ha guardado la información exitosamente');
    console.log('Información guardada');
    console.log(`Nombre del estudiante: ${studentName}, Nombre del profesor: ${teacherName}, Email del estudiante: ${studentEmail}, Email del profesor: ${teacherEmail}`);
    console.log(`Date: ${date}, Time: ${time}`);

    // Aquí se envía los datos guardados al servidor
    axios.post("http://localhost:3000/createConsulta", data)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
};

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
            <label>Nombre del estudiante:</label><br/>
            <input type="text" class="btn btn-outline-primary" value={studentName} onChange={handleStudentName} /><br/>
            <label>Nombre del profesor:</label><br/>
            <input type="text" class="btn btn-outline-primary" value={teacherName} onChange={handleTeacherName} /><br/>
            <label>Email del estudiante:</label><br/>
            <input type="text" class="btn btn-outline-primary" value={studentEmail} onChange={handleStudentEmail} /><br/>
            <label>Email del profesor:</label><br/>
            <input type="text" class="btn btn-outline-primary" value={teacherEmail} onChange={handleTeacherEmail} /><br/>


            <label>Dia y hora para presentar su examen de grado:</label><br/>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)} />
            
            <select id="timeselector" onChange={(e) => setTime(e.target.value)}>
          </select><br/><br/>

            <button type="submit" id="timeselector" class="btn btn-primary" onClick={handleSubmit} >Guardar</button>
        </form>


      <GetConsultas></GetConsultas>

    </div>
  );
};

export default Picker;