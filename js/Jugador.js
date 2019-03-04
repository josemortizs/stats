/*
    --------------------Clase Jugador--------------------
    Usada para representar a cada jugador, posee un array
    de elemenos de tipo Jugada para almacenar cada una de
    las acciones de dicho jugador.
    Desarrollado por José Manuel Ortiz Sánchez
*/
class Jugador
{
    constructor(numero, nombre, posicion)
    {
        this.numero = numero;
        this.nombre = nombre;
        this.posicion = posicion;
        this.jugadas = new Array();
    }

    fromJSON(json)
    {
        this.numero = json.numero;
        this.nombre = json.nombre;
        this.posicion = json.posicion;
        for(var i=0 ; i < json.jugadas.length; i++)
        {
            var jugada = new Jugada();
            jugada.fromJSON(json.jugadas[i]);
            this.jugadas.push(jugada);
        }
    }

    agregarJugada(jugada)
    {
        this.jugadas.push(jugada);
    }

    borrarJugada(indice)
    {
        this.jugadas.splice(indice, 1);
    }
}
