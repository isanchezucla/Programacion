export default class Cl_futbol {
    constructor() {
        this.contPartidos = 0;
        this.contPartidosGanados = 0;
    }
    procesarPartido(partidos) {
        this.contPartidos++;
        if (partidos.resultadoDePartido() == 1) {
            this.contPartidosGanados += partidos.resultadoDePartido();
        }
    }
    porcentajePartidosGanados() {
        return (this.contPartidosGanados * 100) / this.contPartidos;
    }
}