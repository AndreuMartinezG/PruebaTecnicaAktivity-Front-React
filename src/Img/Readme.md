# Ejercicio test para Full Stack AktivityAPP

Este ejercicio constará de 2 partes, un back en NodeJS y un front en ReactJS<br>
En el repo tenéis todas las imágenes, iconos, etc que podáis necesitar para la maquetación.

<h2>Backend</h2><a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a>

Api con 1 método /login, la misma debe recibir usuario(e-mail) y password, y devolver un json con el status, el nombre y apellido
<br>
Ejemplo de Json<br>
>[{
>	"status": 1,
>	"name": "Jhon",
>	"surname": "Smith"
>}]
<br>
El status tendrá 2 valores posibles, 0 para incorrectas y 1 para correctas.
<br><br>
No será necesario BBDD, se pueden validar directamente en código con las siguientes credenciales.<br>
>Username: jhon.smith@akapp.test<br>
>Password: enjoyfirst<br>


<h2>Frontend</h2><a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>

Consta de 2 pantallas, una para realizar el login y un ranking de 10 personas<br>
La pantalla principal será el login, en la que solo será funcional el login, el resto de botones y controles(ej, Request Demo, etc), no serán funcionales, pero tienen que aparecer.<br>
<br>
Se podrá entrar el e-mail y la password y pulsar el botón Sign in, para validar con el backend, y en caso de ser correctas las credenciales ir a la segunda pantalla, el raking.<br>
<!--```diff
-Si necesitáis mostrar algún mensaje, podéis sustituir el texto de Lorem ipsum..., por el texto que necesitéis en color rojo y con el mismo tipo de letra. 
``` -->
<br>
Una vez realizado el login, deberá mostrar directamente el ranking, tenéis todos los datos en ./data/users.json, 

Mas abajo tenéis el Figma con todo el diseño, donde están todas las propiedades y pixel exacto de cada parte del diseño.

https://www.figma.com/file/p37c9fE0nrMADCkX32Q7Dd/FrontEnd-UI---Login-%2B-Leaderboard?node-id=19%3A1134

