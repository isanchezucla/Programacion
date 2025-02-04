export default class Cl_datos {
    constructor(edad) {
        this._edad = edad;
    }
    set edad(edad) {
        this._edad = +edad;
    }
    get edad() {
        return this._edad;
    }
    rangoEdad() {
        return this.edad;
    }
}