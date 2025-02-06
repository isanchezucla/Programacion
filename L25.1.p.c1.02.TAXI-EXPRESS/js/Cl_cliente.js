export default class Cl_cliente {
    constructor(nombre, tipoServicio, edad, sexo) {
        this._nombre = nombre;
        this._tipoServicio = tipoServicio;
        this._edad = edad;
        this._sexo = sexo;
    }
    get nombre() {
        return this._nombre;
    }
    get tipoServicio() {
        return this._tipoServicio;
    }
    get edad() {
        return this._edad;
    }
    get sexo() {
        return this._sexo;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set tipoServicio(tipoServicio) {
        this._tipoServicio = tipoServicio;
    }
    set edad(edad) {
        this._edad = +edad;
    }
    set sexo(sexo) {
        this._sexo = +sexo;
    }
}