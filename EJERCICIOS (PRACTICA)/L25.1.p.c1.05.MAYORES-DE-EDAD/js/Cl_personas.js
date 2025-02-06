export default class Cl_personas {
    constructor() {
        this.contPersonas = 0;
        this.contPersonasMayEdad = 0;
    }
    procesarDatos(datos) {
        this.contPersonas++;
        if (datos.rangoEdad() >= 18) {
            this.contPersonasMayEdad++;
        }
    }
    totalPersonas() {
        return this.contPersonas;
    }
    MayoresEdad() {
        return this.contPersonasMayEdad;
    }
    porcentajePersonasMayEdad() {
        return (this.contPersonasMayEdad * 100) / this.contPersonas;
    }
}