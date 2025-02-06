export default class Cl_personas {
    constructor() {
        this.contMujeres = 0;
        this.contHombres = 0;
    }
    procesarDatos(datos) {
        if (datos.genero() == "M") {
            this.contHombres++;
        } else if (datos.genero() == "F") {
            this.contMujeres++;
        }
        else 
        return 0;
    }
    totalPersonas() {
        return this.contMujeres + this.contHombres;
    }
}