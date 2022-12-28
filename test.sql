CREATE DATABASE IF NOT EXISTS testeando
  DEFAULT CHARACTER SET utf8
  COLLATE utf8_general_ci;

USE testeando;

CREATE TABLE IF NOT EXISTS Agenda (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre_alumno VARCHAR(20) NOT NULL,
  mail_alumno VARCHAR(50) NOT NULL,
  nombre_profesor VARCHAR(20) NOT NULL,
  mail_profesor VARCHAR(50) NOT NULL,
  fecha_hora DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO Agenda (nombre_alumno, mail_alumno, nombre_profesor, mail_profesor, fecha_hora)
VALUES
  ('Juan Perez', 'juan@example.com', 'Alvaro Suarez', 'alvaro@example.com', '2020-01-12 09:00'),
  ('Ana Lopez', 'ana@example.com', 'Pedro Gomez', 'pedro@example.com', '2020-02-15 10:30'),
  ('Miguel Martinez', 'miguel@example.com', 'Jorge Flores', 'jorge@example.com', '2020-03-21 14:00');