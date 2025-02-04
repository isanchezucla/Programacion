/*CONTADOR DE PERSONAS
Sea el nombre y el sexo de varias personas (F-M). 
Se necesita un programa que lea estos datos y reporte al final la cantidad de hombres
procesados y la cantidad de mujeres procesadas.
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, Liz, Marcos y Leo; 
la salida requerida presenta el siguiente formato:
Cantidad de personas: 12
Cantidad de hombres: 5
Cantidad de mujeres: 7 
*/

import Cl_persona from "./Cl_personas.js";
import Cl_datos from "./Cl_datos.js";

let persona1 = new Cl_datos("Luisa", "F");
let persona2 = new Cl_datos("Ana", "F");
let persona3 = new Cl_datos("José", "M");
let persona4 = new Cl_datos("Carmen", "F");
let persona5 = new Cl_datos("Rosa", "F");
let persona6 = new Cl_datos("José", "M");    
let persona7 = new Cl_datos("Maria", "F");
let persona8 = new Cl_datos("Luz", "F");
let persona9 = new Cl_datos("Rafael", "M");
let persona10 = new Cl_datos("Liz", "F");
let persona11 = new Cl_datos("Marcos", "M");
let persona12 = new Cl_datos("Leo", "M");

let datos = new Cl_persona();

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
<br>Cantidad de hombres: ${datos.contHombres}
<br>Cantidad de mujeres: ${datos.contMujeres}`
