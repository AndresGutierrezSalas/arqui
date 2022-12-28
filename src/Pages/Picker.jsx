import React, { useState } from 'react';
import GetConsultas from '../GetConsultas';
import axios from 'axios';

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
            <input type="text" value={studentName} onChange={handleStudentName} /><br/>
            <label>Nombre del profesor:</label><br/>
            <input type="text" value={teacherName} onChange={handleTeacherName} /><br/>
            <label>Email del estudiante:</label><br/>
            <input type="text" value={studentEmail} onChange={handleStudentEmail} /><br/>
            <label>Email del profesor:</label><br/>
            <input type="text" value={teacherEmail} onChange={handleTeacherEmail} /><br/>


            <label>Dia y hora para presentar su examen de grado:</label><br/>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)} />
            
            <select onChange={(e) => setTime(e.target.value)}>
              <option value="09:00:00">09:00 am</option>
              <option value="10:00:00">10:00 am</option>
              <option value="11:00:00">11:00 am</option>
              <option value="12:00:00">12:00 pm</option>
              <option value="14:00:00">14:00 pm</option>
              <option value="15:00:00">15:00 pm</option>
          </select><br/><br/>

            <button type="submit" onClick={handleSubmit} >Guardar</button>
        </form>


      <GetConsultas></GetConsultas>

    </div>
  );
};

export default Picker;