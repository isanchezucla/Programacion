export default class Cl_persona {
    constructor() {
        this.acEdad = 0;
        this.contPersonas = 0;
    }
    procesarEdad(edad) {
        this.contPersonas++;
        this.acEdad += edad.edad;
    }
    edadPromedio() {
        return this.acEdad / this.contPersonas;
    }
}