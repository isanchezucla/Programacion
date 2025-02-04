export default class Cl_bodega {
    constructor() {
       this._acGanancias = 0;
    }
    procesarArticulo(articulo) {
        this._acGanancias += articulo.ganancia();
    }
    totalGanancias() {
        return this._acGanancias;
    }
}