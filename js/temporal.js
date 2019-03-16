/* Carga inicial de datos - Solo válido para pruebas 

var partido = new Partido('01/01/2019', '12:00', 'JuvFem', 'CV Berja', 'CNA');

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

partido.jugadores.push(jugador);
partido.jugadores.push(jugador2);

partido.jugadores[0].agregarJugada(new Jugada('R', '--'));
partido.jugadores[0].agregarJugada(new Jugada('R', '--'));
partido.jugadores[0].agregarJugada(new Jugada('R', '--'));

partido.jugadores[0].agregarJugada(new Jugada('A', ':'));
partido.jugadores[0].agregarJugada(new Jugada('S', '-'));
partido.jugadores[0].agregarJugada(new Jugada('D', '+'));

partido.jugadores[1].agregarJugada(new Jugada('A', '++'));
partido.jugadores[1].agregarJugada(new Jugada('S', '+'));
partido.jugadores[1].agregarJugada(new Jugada('D', ':'));

guardaPartido();

*/

<table>
<tr>
    <th rowspan="2">#</th>
    <th rowspan="2">Jugador</th>
    <th colspan="5">Saque</th>
    <th colspan="5">Recepción</th>
    <th colspan="5">Ataque</th>
    <th colspan="5">Bloqueo</th>
    <th colspan="5">Defensa</th>
</tr>
<tr>
    <td>ST</td>
    <td>--</td>
    <td>-</td>
    <td>+</td>
    <td>++</td>
    <td>RT</td>
    <td>--</td>
    <td>-</td>
    <td>+</td>
    <td>++</td>                    
    <td>AT</td>
    <td>--</td>
    <td>-</td>
    <td>+</td>
    <td>++</td>
    <td>BT</td>
    <td>--</td>
    <td>-</td>
    <td>+</td>
    <td>++</td>                     
    <td>DT</td>
    <td>--</td>
    <td>-</td>
    <td>+</td>
    <td>++</td>
</tr>
<tr>
    <td>11</td>
    <td>José Manuel Ortiz</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
</tr>
<tr>
    <td>4</td>
    <td>Alberto Ortiz Sánchez</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td> 
</tr>
</table>