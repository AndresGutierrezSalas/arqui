import React, { useState, useEffect } from "react";
import axios from "axios";

const GetConsultas = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getConsultas")
      .then(response => setData(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div  key={item.id}>
          <p>Nombre del alumno: {item.nombre_alumno}</p>
          <p>Mail del alumno: {item.mail_alumno}</p>
          <p>Nombre del profesor: {item.nombre_profesor}</p>
          <p>Mail del profesor: {item.mail_profesor}</p>
          <p>Fecha y Hora de la consulta : {item.fecha_hora}</p>
        </div>
      ))}
    </div>
  );
};

export default GetConsultas;