/*FÚTBOL
Conociendo los resultados de varios juegos de tu equipo de fútbol, 
donde 1 es ganar y 0 es perder, hacer un programa que indique el porcentaje de juegos que ganaste.
Ej. Resultados de 6 juegos: 1, 1, 0, 1, 0, 1
la salida requerida presenta el siguiente formato:
Ganaste el 66.67% de los juegos
*/
import Cl_partidos from "./Cl_partidos.js";
import Cl_futbol from "./Cl_futbol.js";

let juego1 = new Cl_partidos(1);
let juego2 = new Cl_partidos(1);
let juego3 = new Cl_partidos(0);
let juego4 = new Cl_partidos(1);
let juego5 = new Cl_partidos(0);
let juego6 = new Cl_partidos(1);

let futbol = new Cl_futbol();
futbol.procesarPartido(juego1);
futbol.procesarPartido(juego2);
futbol.procesarPartido(juego3);
futbol.procesarPartido(juego4);
futbol.procesarPartido(juego5);
futbol.procesarPartido(juego6);

alert(`Ganaste el ${futbol.porcentajePartidosGanados()}% de los juegos`);