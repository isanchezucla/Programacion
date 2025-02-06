export default class Cl_datos {
    constructor(nombre, sexo) {
        this._nombre = nombre;
        this._sexo = sexo;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get sexo() {
        return this._sexo;
    }
    genero() {
        return this._sexo;
    }
}