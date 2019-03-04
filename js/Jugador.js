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

    getDatosRecepcion()
    {
        var r2n = 0; var r1n = 0; var r2puntos = 0;
        var r1p = 0; var r2p = 0; var rTotales = 0;
        var recepciones = Array();
        
        for(var k=0; k<this.jugadas.length; k++)
        {
            if (this.jugadas[k].tipo == 'R')
            {
                switch(this.jugadas[k].resultado) 
                {
                    case '--':
                        r2n++;
                        rTotales++;
                        break;
                    case '-':
                        r1n++;
                        rTotales++;
                        break;
                    case ':':
                        r2puntos++;
                        rTotales++;
                        break;
                    case '+':
                        r1p++;
                        rTotales++;
                        break;
                    case '++':
                        r2p++;
                        rTotales++;
                        break;
                    default:
                        rTotales++;
                }
            }
        }

        recepciones.push(rTotales);
        recepciones.push(r2n);
        recepciones.push(r2n*100/rTotales);
        recepciones.push(r1n);
        recepciones.push(r1n*100/rTotales);
        recepciones.push(r2puntos);
        recepciones.push(r2puntos*100/rTotales);
        recepciones.push(r1p);
        recepciones.push(r1p*100/rTotales);
        recepciones.push(r2p);
        recepciones.push(r2p*100/rTotales);

        return recepciones;
    }

}
