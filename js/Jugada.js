/*
    --------------------Clase Jugada------------------------
    Usada para representar una única jugada con su resultado
    Desarrollado por José Manuel Ortiz Sánchez
*/
class Jugada
{
    constructor(tipo, resultado)
    {
        this.tipo = tipo;
        this.resultado = resultado;
    }

    fromJSON(json)
    {
        this.tipo = json.tipo;
        this.resultado = json.resultado;
    }
}

/*
    En recepción (R):
    ( -- )  Dos negativos, punto directo para el otro equipo
    ( - )   Negativo, la recepción no nos permite jugar con nuestro central
    ( : )   Dos puntos, el balón pasa al otro campo, ellos tienen el siguiente ataque
    ( + )   Positivo, nos permite atacar con nuestro central, aunque no comodamente.
    ( ++ )  Dos positivos, recepción perfecta en cuanto a altura y posición.

    En saque (S):
    ( -- )  Dos negativos, saque fallado directamente
    ( - )   Negativo, nos atacan con todas sus alternativas
    ( : )   Dos puntos, nos devuelven el balón sin atacarlo
    ( + )   Positivo, solo pueden atacar por las puntas.
    ( ++ )  Dos positivos, hacemos punto directo.
*/