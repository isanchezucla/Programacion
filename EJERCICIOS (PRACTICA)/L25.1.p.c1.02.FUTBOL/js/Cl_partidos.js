export default class Cl_partidos {
    constructor(partidos) {
        this._partidos = partidos;
    }
    set partidos(partidos) {
        this._partidos = +partidos;
    }
    get partidos() {
        return this._partidos;
    }
    resultadoDePartido() {
        return this._partidos;
    }
}