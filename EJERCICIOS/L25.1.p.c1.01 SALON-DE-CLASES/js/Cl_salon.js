export default class Cl_salon {
    constructor() {
        this.acEdad = 0;
        this.contEstudiantes = 0;
        this.edadMayor = 0;
        this.nombreMayor = " ";
        this.cantChicas = 0;
        this.contChicasMay18 = 0;
    }
    procesarEstudiante(estudiante) {
        this.acEdad += estudiante.edad;
        this.contEstudiantes++;
        if(estudiante.edad > this.edadMayor) {
            this.edadMayor = estudiante.edad;
            this.nombreMayor = estudiante.nombre;
        }
        if(estudiante.sexo == "F") {
            this.cantChicas++;
            if(estudiante.sexo > 18) {
                this.contChicasMay18++;
            }
        }
    }
    edadPromedio() {
        return this.acEdad / this.contEstudiantes;
    }
    porcentajeChicasMayor18() {
        return (this.cantChicas / this.contEstudiantes) * 100;
    }
    nombreMayorEdad() {
        return this.nombreMayor;
    }
}