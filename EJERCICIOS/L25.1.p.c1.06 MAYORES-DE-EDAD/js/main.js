/*MAYORES DE EDAD
Sea el nombre y la edad de varias personas. 
Se necesita un programa que lea estos datos y reporte al final el porcentaje de personas que son mayores de edad.
Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18),
José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida
presenta el siguiente formato:
Cantidad de personas: 12
Cantidad de personas mayor de edad: 7
Porcentaje de personas mayor de edad: 58.33% 
*/
import Cl_datos from "./Cl_datos.js";
import Cl_personas from "./Cl_personas.js";

let persona1 = new Cl_datos(15);
let persona2 = new Cl_datos(19);
let persona3 = new Cl_datos(21);    
let persona4 = new Cl_datos(17);
let persona5 = new Cl_datos(18);
let persona6 = new Cl_datos(22);    
let persona7 = new Cl_datos(17);
let persona8 = new Cl_datos(19);
let persona9 = new Cl_datos(23);
let persona10 = new Cl_datos(15);
let persona11 = new Cl_datos(20);
let persona12 = new Cl_datos(16);

let datos = new Cl_personas();

datos.procesarDatos(persona1);
datos.procesarDatos(persona2);
datos.procesarDatos(persona3);
datos.procesarDatos(persona4);
datos.procesarDatos(persona5);
datos.procesarDatos(persona6);
datos.procesarDatos(persona7);
datos.procesarDatos(persona8);
datos.procesarDatos(persona9);
datos.procesarDatos(persona10);
datos.procesarDatos(persona11);
datos.procesarDatos(persona12);

salida.innerHTML=`
Cantidad de personas: ${datos.totalPersonas()}
<br>Cantidad de personas mayor de edad: ${datos.MayoresEdad()}
<br>Porcentaje de personas mayor de edad: ${datos.porcentajePersonasMayEdad()}%`