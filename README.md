# Sistema de trazabilidad de exámenes de titulación FCI
## Integrantes del grupo:
* Diego Agüero
* Francisco Aranda
* Natalia Cárcamo
* Andrés Gutiérrez
* Javier Mansilla
* Álvaro Navarro
* Claudio Pinilla
* Felipe Soto
* Victor Moya

<h1>Si se descarga el proyecto desde 0, por favor ejecutar npm i, e instalar la base de datos (archivo app/test.sql.)</h1>

<p>Para instalar la base de datos, entrar por consola al cliente sql, y ejecutar "source (path del archivo);" </p>

<p>Para levantar el servidor, en la consola ejecutar "node index.js"</p>
<p>Para levantar el Frontend, en la consola ejecutar "npm run dev"</p>

<p>Sin embargo estos comandos no son necesarios si se quiere ejecutar en un container</p>


<p>Los comandos para ejecutarlos en docker son:</p>
<p>en /api</p>
<p>* docker build -t api-img .</p>
<p>* docker run -p 3000:3000 --name api-cnt api-img</p>

<p>en /app</p>
<p>* docker build -t app-img .</p>
<p>* docker run -p 5173:5173 app-cnt app-img</p>

<p>Con todo lo anterior se debe poder ejecutar la aplicacion en localhost:5173 en el navegador, incluyendo una base de datos funcional</p>
