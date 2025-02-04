/*LA BODEGA
En una bodega se tiene el costo de varios artículos y se le piensa ganar a cada uno el 50%.
Hacer un programa que calcule el total de ganancia que tendrá la bodega al venderlos todos. 
Ej. Costos varios artículos: 10, 20, 14, 6 y 4
La salida requerida presenta el siguiente formato:
La ganancia será de Bs.27 
*/

import Cl_articulo from "./Cl_articulo.js";
import Cl_bodega from "./Cl_bodega.js";

let articulo1 = new Cl_articulo(10);
let articulo2 = new Cl_articulo(20);
let articulo3 = new Cl_articulo(14);
let articulo4 = new Cl_articulo(6);
let articulo5 = new Cl_articulo(4);

let bodega = new Cl_bodega();
bodega.procesarArticulo(articulo1);
bodega.procesarArticulo(articulo2); 
bodega.procesarArticulo(articulo3);
bodega.procesarArticulo(articulo4);
bodega.procesarArticulo(articulo5);

alert(`La ganancia será de Bs.${bodega.totalGanancias()}`);