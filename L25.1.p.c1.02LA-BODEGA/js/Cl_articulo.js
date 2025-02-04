export default class Cl_articulo {
    constructor(precio) {
        this.precio = precio;
    }
    set precio(precio) {
        this._precio = +precio;
    }
    get precio() {
        return this._precio;
    }
    ganancia() {
        return this._precio * 0.5;
    }
}