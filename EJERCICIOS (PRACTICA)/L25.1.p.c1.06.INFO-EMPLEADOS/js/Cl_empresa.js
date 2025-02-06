export default class Cl_empresa {
    constructor() {
        this.contadorObreros = 0;
        this.contadorAdmin = 0;
        this.sumaSueldoObreros = 0;
        this.sumaSueldoAdmin = 0;
    }
    procesarEmpleados(empleado) {
        if (empleado.tipo == "obrero") {
            this.contadorObreros++;
            this.sumaSueldoObreros += empleado.sueldo;
        }
        if (empleado.tipo == "administrativo") {
            this.contadorAdmin++;
            this.sumaSueldoAdmin += empleado.sueldo;
        }
    }
    totalSueldoObreros() {
        return this.sumaSueldoObreros;
    }
    promedioSueldoObreros() {
        return this.sumaSueldoObreros / this.contadorObreros;
    }
    totalSueldoAdmin() {
        return this.sumaSueldoAdmin;
    }
    promedioSueldoAdmin() {
        return this.sumaSueldoAdmin / this.contadorAdmin;
    }
}