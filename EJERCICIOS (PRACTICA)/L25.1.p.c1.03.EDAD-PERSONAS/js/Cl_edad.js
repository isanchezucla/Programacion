export default class Cl_edad {
    constructor(edad) {
        this._edad = edad;
    }
    set edad(edad) {
        this._edad = +edad;
    }
    get edad() {
        return this._edad;
    }
    edadPersona() {
        return this._edad;
    }
}