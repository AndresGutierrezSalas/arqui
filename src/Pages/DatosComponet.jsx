import React, { useState } from 'react';

const DatosComponet = () => {
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

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Se ha guardado la información exitosamente');
        console.log('Información guardada');
        console.log(`Nombre del estudiante: ${studentName}, Nombre del profesor: ${teacherName}, Email del estudiante: ${studentEmail}, Email del profesor: ${teacherEmail}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre del estudiante:</label><br/>
            <input type="text" value={studentName} onChange={handleStudentName} /><br/>
            <label>Nombre del profesor:</label><br/>
            <input type="text" value={teacherName} onChange={handleTeacherName} /><br/>
            <label>Email del estudiante:</label><br/>
            <input type="text" value={studentEmail} onChange={handleStudentEmail} /><br/>
            <label>Email del profesor:</label><br/>
            <input type="text" value={teacherEmail} onChange={handleTeacherEmail} /><br/>
            <button type="submit" >Guardar</button>
        </form>
    )
}

export default DatosComponet;