/*EDAD PERSONAS
3. Conociendo la edad de varias personas, indicar la edad promedio.
Ej. Edades de las personas es: 15, 14, 19, 20, 16 y 18
La salida requerida presenta el siguiente formato:
La edad promedio es 17
*/

import Cl_persona from "./Cl_persona.js";
import Cl_edad from "./Cl_edad.js";

let persona1 = new Cl_edad(15);
let persona2 = new Cl_edad(14);
let persona3 = new Cl_edad(19);
let persona4 = new Cl_edad(20);
let persona5 = new Cl_edad(16);
let persona6 = new Cl_edad(18);

let edad = new Cl_persona();
edad.procesarEdad(persona1);
edad.procesarEdad(persona2);    
edad.procesarEdad(persona3);
edad.procesarEdad(persona4);
edad.procesarEdad(persona5);
edad.procesarEdad(persona6);

alert(`La edad promedio es ${edad.edadPromedio()}`);