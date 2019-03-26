/*
    STATS - Estadísticas para el Voleibol
    Desarrollado por José Manuel Ortiz Sánchez
    josemortizs@gmail.com --- 697306046
*/
/*
    --------------------Clase Jugador--------------------
    Usada para representar a cada jugador, posee un array
    de elemenos de tipo Jugada para almacenar cada una de
    las acciones de dicho jugador.
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

        datosEstadisticos.push(rTotales);               //0
        datosEstadisticos.push(r2n);                    //1
        datosEstadisticos.push(r2n*100/rTotales);       //2
        datosEstadisticos.push(r1n);                    //3
        datosEstadisticos.push(r1n*100/rTotales);       //4
        datosEstadisticos.push(r2puntos);               //5
        datosEstadisticos.push(r2puntos*100/rTotales);  //6
        datosEstadisticos.push(r1p);                    //7
        datosEstadisticos.push(r1p*100/rTotales);       //8
        datosEstadisticos.push(r2p);                    //9
        datosEstadisticos.push(r2p*100/rTotales);       //10

        datosEstadisticos.push(sTotales);               //11
        datosEstadisticos.push(s2n);                    //12
        datosEstadisticos.push(s2n*100/sTotales);       //13
        datosEstadisticos.push(s1n);                    //14
        datosEstadisticos.push(s1n*100/sTotales);       //15
        datosEstadisticos.push(s2puntos);               //16
        datosEstadisticos.push(s2puntos*100/sTotales);  //17
        datosEstadisticos.push(s1p);                    //18
        datosEstadisticos.push(s1p*100/sTotales);       //19
        datosEstadisticos.push(s2p);                    //20
        datosEstadisticos.push(s2p*100/sTotales);       //21

        datosEstadisticos.push(aTotales);               //22
        datosEstadisticos.push(a2n);                    //23
        datosEstadisticos.push(a2n*100/aTotales);       //24
        datosEstadisticos.push(a1n);                    //25
        datosEstadisticos.push(a1n*100/aTotales);       //26
        datosEstadisticos.push(a2puntos);               //27
        datosEstadisticos.push(a2puntos*100/aTotales);  //28
        datosEstadisticos.push(a1p);                    //29
        datosEstadisticos.push(a1p*100/aTotales);       //30
        datosEstadisticos.push(a2p);                    //31
        datosEstadisticos.push(a2p*100/aTotales);       //32

        datosEstadisticos.push(bTotales);               //33
        datosEstadisticos.push(b2n);                    //34
        datosEstadisticos.push(b2n*100/bTotales);       //35
        datosEstadisticos.push(b1n);                    //36
        datosEstadisticos.push(b1n*100/bTotales);       //37
        datosEstadisticos.push(b2puntos);               //38
        datosEstadisticos.push(b2puntos*100/bTotales);  //39   
        datosEstadisticos.push(b1p);                    //40
        datosEstadisticos.push(b1p*100/bTotales);       //41
        datosEstadisticos.push(b2p);                    //42
        datosEstadisticos.push(b2p*100/bTotales);       //43

        datosEstadisticos.push(dTotales);               //44
        datosEstadisticos.push(d2n);                    //45
        datosEstadisticos.push(d2n*100/dTotales);       //46
        datosEstadisticos.push(d1n);                    //47
        datosEstadisticos.push(d1n*100/dTotales);       //48
        datosEstadisticos.push(d2puntos);               //49
        datosEstadisticos.push(d2puntos*100/dTotales);  //50
        datosEstadisticos.push(d1p);                    //51
        datosEstadisticos.push(d1p*100/dTotales);       //52
        datosEstadisticos.push(d2p);                    //53
        datosEstadisticos.push(d2p*100/dTotales);       //54

        for(var g = 0; g<datosEstadisticos.length; g++)
        {
            (isNaN(datosEstadisticos[g]))? datosEstadisticos[g] = 0 : datosEstadisticos[g] = datosEstadisticos[g];

            (Number.isInteger(datosEstadisticos[g]))? 
            datosEstadisticos[g] = datosEstadisticos[g]: 
            datosEstadisticos[g] = datosEstadisticos[g].toFixed(1);
        }

        return datosEstadisticos;
    }
}
