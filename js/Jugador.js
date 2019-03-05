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

    getDatosEstadisticos()
    {
        var r2n = 0; var r1n = 0; var r2puntos = 0;
        var r1p = 0; var r2p = 0; var rTotales = 0;
        var s2n = 0; var s1n = 0; var s2puntos = 0;
        var s1p = 0; var s2p = 0; var sTotales = 0;
        var a2n = 0; var a1n = 0; var a2puntos = 0;
        var a1p = 0; var a2p = 0; var aTotales = 0;
        var d2n = 0; var d1n = 0; var d2puntos = 0;
        var d1p = 0; var d2p = 0; var dTotales = 0;
        var b2n = 0; var b1n = 0; var b2puntos = 0;
        var b1p = 0; var b2p = 0; var bTotales = 0;
        var datosEstadisticos = Array();
        
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

            else if (this.jugadas[k].tipo == 'S')
            {
                switch(this.jugadas[k].resultado) 
                {
                    case '--':
                        s2n++;
                        sTotales++;
                        break;
                    case '-':
                        s1n++;
                        sTotales++;
                        break;
                    case ':':
                        s2puntos++;
                        sTotales++;
                        break;
                    case '+':
                        s1p++;
                        sTotales++;
                        break;
                    case '++':
                        s2p++;
                        sTotales++;
                        break;
                    default:
                        sTotales++;
                }
            }

            else if (this.jugadas[k].tipo == 'A')
            {
                switch(this.jugadas[k].resultado) 
                {
                    case '--':
                        a2n++;
                        aTotales++;
                        break;
                    case '-':
                        a1n++;
                        aTotales++;
                        break;
                    case ':':
                        a2puntos++;
                        aTotales++;
                        break;
                    case '+':
                        a1p++;
                        aTotales++;
                        break;
                    case '++':
                        a2p++;
                        aTotales++;
                        break;
                    default:
                        aTotales++;
                }
            }

            else if (this.jugadas[k].tipo == 'B')
            {
                switch(this.jugadas[k].resultado) 
                {
                    case '--':
                        b2n++;
                        bTotales++;
                        break;
                    case '-':
                        b1n++;
                        bTotales++;
                        break;
                    case ':':
                        b2puntos++;
                        bTotales++;
                        break;
                    case '+':
                        b1p++;
                        bTotales++;
                        break;
                    case '++':
                        b2p++;
                        bTotales++;
                        break;
                    default:
                        bTotales++;
                }
            }

            else
            {
                switch(this.jugadas[k].resultado) 
                {
                    case '--':
                        d2n++;
                        dTotales++;
                        break;
                    case '-':
                        d1n++;
                        dTotales++;
                        break;
                    case ':':
                        d2puntos++;
                        dTotales++;
                        break;
                    case '+':
                        d1p++;
                        dTotales++;
                        break;
                    case '++':
                        d2p++;
                        dTotales++;
                        break;
                    default:
                        dTotales++;
                }
            }
        }

        datosEstadisticos.push(rTotales);
        datosEstadisticos.push(r2n);
        datosEstadisticos.push(r2n*100/rTotales);
        datosEstadisticos.push(r1n);
        datosEstadisticos.push(r1n*100/rTotales);
        datosEstadisticos.push(r2puntos);
        datosEstadisticos.push(r2puntos*100/rTotales);
        datosEstadisticos.push(r1p);
        datosEstadisticos.push(r1p*100/rTotales);
        datosEstadisticos.push(r2p);
        datosEstadisticos.push(r2p*100/rTotales);

        datosEstadisticos.push(sTotales);
        datosEstadisticos.push(s2n);
        datosEstadisticos.push(s2n*100/sTotales);
        datosEstadisticos.push(s1n);
        datosEstadisticos.push(s1n*100/sTotales);
        datosEstadisticos.push(s2puntos);
        datosEstadisticos.push(s2puntos*100/sTotales);
        datosEstadisticos.push(s1p);
        datosEstadisticos.push(s1p*100/sTotales);
        datosEstadisticos.push(s2p);
        datosEstadisticos.push(s2p*100/sTotales);

        datosEstadisticos.push(aTotales);
        datosEstadisticos.push(a2n);
        datosEstadisticos.push(a2n*100/aTotales);
        datosEstadisticos.push(a1n);
        datosEstadisticos.push(a1n*100/aTotales);
        datosEstadisticos.push(a2puntos);
        datosEstadisticos.push(a2puntos*100/aTotales);
        datosEstadisticos.push(a1p);
        datosEstadisticos.push(a1p*100/aTotales);
        datosEstadisticos.push(a2p);
        datosEstadisticos.push(a2p*100/aTotales);

        datosEstadisticos.push(bTotales);
        datosEstadisticos.push(b2n);
        datosEstadisticos.push(b2n*100/bTotales);
        datosEstadisticos.push(b1n);
        datosEstadisticos.push(b1n*100/bTotales);
        datosEstadisticos.push(b2puntos);
        datosEstadisticos.push(b2puntos*100/bTotales);
        datosEstadisticos.push(b1p);
        datosEstadisticos.push(b1p*100/bTotales);
        datosEstadisticos.push(b2p);
        datosEstadisticos.push(b2p*100/bTotales);

        datosEstadisticos.push(dTotales);
        datosEstadisticos.push(d2n);
        datosEstadisticos.push(d2n*100/dTotales);
        datosEstadisticos.push(d1n);
        datosEstadisticos.push(d1n*100/dTotales);
        datosEstadisticos.push(d2puntos);
        datosEstadisticos.push(d2puntos*100/dTotales);
        datosEstadisticos.push(d1p);
        datosEstadisticos.push(d1p*100/dTotales);
        datosEstadisticos.push(d2p);
        datosEstadisticos.push(d2p*100/dTotales);

        for(var g = 0; g<datosEstadisticos.length; g++)
        {
            (isNaN(datosEstadisticos[g]))? datosEstadisticos[g] = 0 : datosEstadisticos[g] = datosEstadisticos[g];
        }

        return datosEstadisticos;
    }
}
