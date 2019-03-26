/*
    STATS - Estadísticas para el Voleibol
    Desarrollado por José Manuel Ortiz Sánchez
    josemortizs@gmail.com --- 697306046
*/
/*
    --------------------Clase Partido--------------------
    Usada para unificar los datos de un partido, contiene
    un Array de objetos de tipo Jugador y atributos para
    almacenar sus datos propios.
*/
class Partido
{
    constructor(fecha, hora, categoria, equipo, rival)
    {
        this.fecha = fecha;
        this.hora = hora;
        this.categoria = categoria;
        this.equipo = equipo;
        this.rival = rival;
        this.jugadores = Array();
    }

    fromJSON(json)
    {
        this.fecha = json.fecha;
        this.hora = json.hora;
        this.categoria = json.categoria;
        this.equipo = json.equipo;
        this.rival = json.rival;
        
        for(var i=0; i<json.jugadores.length; i++)
        {
            var jugador = new Jugador();
            jugador.fromJSON(json.jugadores[i]);
            this.jugadores.push(jugador);
        }
    }

    getNombrePartido()
    {
        return this.categoria + this.fecha + this.hora + this.rival;
    }

    getDatosGenerales()
    {
        return this.fecha + " - " +  this.hora + " - Versus: " + this.rival + " - " + this.categoria;
    }
}