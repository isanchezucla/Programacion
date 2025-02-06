export default class Cl_empleados {
    constructor(tipo, sueldo) {
        this._tipo = tipo;
        this._sueldo = sueldo;
    }
    get tipo() {
        return this._tipo;
    }
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) { 
        this._sueldo = sueldo; 
    }
   set tipo(tipo) { 
        this._tipo = tipo; 
    }
}