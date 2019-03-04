/* Carga inicial de datos - Solo válido para pruebas 
var jugador = new Jugador('11', 'Alberto Ortiz Sánchez', 'Líbero');
var jugador2 = new Jugador('4', 'Pepe Ortiz Sánchez', 'Receptor');

jugador.agregarJugada(new Jugada('R', '++'));
jugador.agregarJugada(new Jugada('R', '--'));
jugador.agregarJugada(new Jugada('R', '-'));
jugador.agregarJugada(new Jugada('R', '++'));
jugador.agregarJugada(new Jugada('R', ':'));
jugador.agregarJugada(new Jugada('R', '-'));
jugador.agregarJugada(new Jugada('R', '++'));
jugador.agregarJugada(new Jugada('R', '+'));
jugador.agregarJugada(new Jugada('R', '+'));
jugador.agregarJugada(new Jugada('R', '++'));

jugador2.agregarJugada(new Jugada('R', '++'));
jugador2.agregarJugada(new Jugada('R', '+'));
jugador2.agregarJugada(new Jugada('R', '+'));
jugador2.agregarJugada(new Jugada('R', '++'));

var partido = new Partido('01/01/2019', '12:00', 'JuvFem', 'CV Berja', 'CNA');
partido.jugadores.push(jugador);
partido.jugadores.push(jugador2);

*/


/* Sección de funciones */

function guardaPartido()
{
    localStorage.clear();
    localStorage.setItem(partido.getNombrePartido(), JSON.stringify(partido));
}

function recuperaPartido()
{
    let partidoLocalStorage = JSON.parse(localStorage.getItem(localStorage.key(0)));
    
    partido.fromJSON(partidoLocalStorage);
}

/* Fin de: Sección de funciones */


/* Instrucciones iniciales */
var partido = new Partido();
recuperaPartido();
console.log(partido);   

partido.jugadores[0].agregarJugada(new Jugada('R', '--'));
partido.jugadores[0].agregarJugada(new Jugada('R', '--'));
partido.jugadores[0].agregarJugada(new Jugada('R', '--'));