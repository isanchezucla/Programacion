export default class Cl_taxi {
    constructor() {
        this.contClientes = 0;
        this.contFemMay18 = 0;
        this.menorEdad = Infinity;
        this.acumEdad = 0;
    }
    procesarCliente(cliente) {
        this.contClientes++;
        this.acumEdad += cliente.edad;

        if (cliente.sexo === 2 && cliente.edad >= 18) {
            this.contFemMay18++;
        }
        if (cliente.edad < this.menorEdad) {
            this.menorEdad = cliente.edad;
        }
    }
    promedioEdad() {
       if (this.contClientes == 0) {
            return 0;
        } else
            return this.acumEdad / this.contClientes;
        }
    clientesFemMay18() {
        return this.contFemMay18;
    }
    menorFemEdad() {
        return this.menorEdad;
    }
}