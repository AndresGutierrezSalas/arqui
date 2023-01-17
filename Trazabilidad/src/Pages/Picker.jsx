import React, { useState } from "react";
import GetConsultas from "../GetConsultas";
import axios from "axios";
import raw from "../../database/disponsible_horarios.txt";

{
  /* Input "Database" from the Secretaria FCI about dates*/
}
var all_dates = "";
fetch(raw)
  .then((r) => r.text())
  .then((text) => {
    all_dates = text;
    all_dates = all_dates.split("#");
    for (var i = 0; i < all_dates.length; i++) {
      var optionText = all_dates[i].split(";");
      $("#timeselector").append(
        `<option value="${optionText[1]}"> ${optionText[1]} </option>`
      );
    }
  });

const Picker = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [studentName, setStudentName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");

  const handleStudentName = (event) => {
    setStudentName(event.target.value);
  };

  const handleTeacherName = (event) => {
    setTeacherName(event.target.value);
  };

  const handleStudentEmail = (event) => {
    setStudentEmail(event.target.value);
  };

  const handleTeacherEmail = (event) => {
    setTeacherEmail(event.target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();
    const data = {
      nombre_alumno: studentName,
      mail_alumno: studentEmail,
      nombre_profesor: teacherName,
      mail_profesor: teacherEmail,
      fecha_hora: date + " " + time,
    };
    alert("Se ha guardado la información exitosamente");
    console.log("Información guardada");
    console.log(
      `Nombre del estudiante: ${studentName}, Nombre del profesor: ${teacherName}, Email del estudiante: ${studentEmail}, Email del profesor: ${teacherEmail}`
    );
    console.log(`Date: ${date}, Time: ${time}`);

    // Aquí se envía los datos guardados al servidor
    axios
      .post("http://host.docker.internal:3000/createConsulta", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-card">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 id="h2text">¡Bienvenido!</h2>
        <h3 id="h3text">Ingrese los datos a continuación:</h3>
        <input
          type="text"
          className="form-check-input"
          value={studentName}
          onChange={handleStudentName}
          placeholder="Nombre del estudiante"
        />
        <input
          type="text"
          className="form-check-input"
          value={teacherName}
          onChange={handleTeacherName}
          placeholder="Nombre del profesor"
        />
        <input
          type="text"
          className="form-check-input"
          value={studentEmail}
          onChange={handleStudentEmail}
          placeholder="Email del estudiante"
        />
        <input
          type="text"
          className="form-check-input"
          value={teacherEmail}
          onChange={handleTeacherEmail}
          placeholder="Email del profesor"
        />
        <label>Dia y hora para presentar su examen de grado:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select
          id="timeselector"
          className="py-3 px-3"
          onChange={(e) => setTime(e.target.value)}
        ></select>

        <button
          type="submit"
          id="timeselector"
          className="btn-guardar"
          onClick={handleSubmit}
        >
          Guardar
        </button>
      </form>

      <GetConsultas></GetConsultas>
    </div>
  );
};

export default Picker;
