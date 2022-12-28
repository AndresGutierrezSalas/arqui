import React, { useState, useEffect } from 'react';
import axios from 'axios';
function ConsultaTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'http://localhost:3000/getConsultas',
      );
      setData(result.data);
      console.log(result);
    };
    fetchData();
  }, []);
  return (
    <div>
        <h1>xD</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre Alumno</th>
            <th>Mail Alumno</th>
            <th>Nombre Profesor</th>
            <th>Mail Profesor</th>
            <th>Fecha y Hora</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre_alumno}</td>
              <td>{item.mail_alumno}</td>
              <td>{item.nombre_profesor}</td>
              <td>{item.mail_profesor}</td>
              <td>{item.fecha_hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>xD</h1>
    </div>
  );
}
export default ConsultaTable;