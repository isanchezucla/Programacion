/*INFO EMPLEADOS
En una empresa se tiene personal obrero y personal administrativo. La empresa necesita
determinar cuál es el monto promedio que paga por cada tipo de personal.
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana
$120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo)
gana $150:
Monto total pagado a obreros: $270
Promedio pagado a 3 obreros: $90
Monto total pagado a administrativos: $350
Promedio pagado a 2 administrativos: $175
*/
import Cl_empleados from "./Cl_empleados.js";
import Cl_empresa from "./Cl_empresa.js";

let empleado1 = new Cl_empleados("obrero", 100);
let empleado2 = new Cl_empleados("obrero", 120);
let empleado3 = new Cl_empleados("administrativo", 200);
let empleado4 = new Cl_empleados("obrero", 50);
let empleado5 = new Cl_empleados("administrativo", 150);

let empresa = new Cl_empresa();
empresa.procesarEmpleados(empleado1);
empresa.procesarEmpleados(empleado2); 
empresa.procesarEmpleados(empleado3);
empresa.procesarEmpleados(empleado4);
empresa.procesarEmpleados(empleado5);

let salida = document.getElementById("salida"); 
salida.innerHTML=(`Monto total pagado a obreros: $${empresa.totalSueldoObreros()}
<br>Promedio pagado a 3 obreros: ${empresa.promedioSueldoObreros()}
<br>Monto total pagado a administrativos: $${empresa.totalSueldoAdmin()}
<br>Promedio pagado a 2 administrativos: ${empresa.promedioSueldoAdmin()}`);