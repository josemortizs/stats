/*
    STATS - Estadísticas para el Voleibol
    Desarrollado por José Manuel Ortiz Sánchez
    josemortizs@gmail.com --- 697306046
*/
/*
    --------------------Clase Jugada------------------------
    Usada para representar una única jugada con su resultado
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
    ( -- )  Dos negativos, punto directo para el otro equipo.
    ( - )   Negativo, la recepción no nos permite jugar con nuestro central.
    ( : )   Dos puntos, el balón pasa al otro campo, ellos tienen el siguiente ataque.
    ( + )   Positivo, nos permite atacar con nuestro central, aunque no comodamente.
    ( ++ )  Dos positivos, recepción perfecta en cuanto a altura y posición.

    En saque (S):
    ( -- )  Dos negativos, saque fallado directamente.
    ( - )   Negativo, nos atacan con todas sus alternativas.
    ( : )   Dos puntos, nos devuelven el balón sin atacarlo.
    ( + )   Positivo, solo pueden atacar por las puntas.
    ( ++ )  Dos positivos, hacemos punto directo.

    En ataque (A):
    ( -- )  Dos negativos, ataque fallado, a la red o fuera. (No bloqueado).
    ( - )   Negativo, defienden nuestro ataque pudiendo ellos atacar a continuación.
    ( : )   Dos puntos, ataque bloqueado.
    ( + )   Positivo, atacamos y no puntuamos, pero el siguiente ataque también es nuestro.
    ( ++ )  Dos positivos, hacemos punto directo.

    En bloqueo (B):
    ( -- )  Dos negativos, nuestro bloqueo va fuera o hacia la red.
    ( - )   Negativo, el siguiente ataque es suyo, apoyan fácil el bloqueo o devolvemos free.
    ( : )   Dos puntos, tocamos la red.
    ( + )   Positivo, el bloqueo consigue que nos devuelvan una freeball o defendemos fácil y atacamos nosotros.
    ( ++ )  Dos positivos, hacemos bloqueo directo.

    En defensa (D):
    ( -- )  Dos negativos, punto directo del otro equipo, balón en nuestra zona.
    ( - )   Negativo, el siguiente ataque es suyo, devolvemos free.
    ( : )   Dos puntos, apoyo no realizado, bloquean a nuestro atacante y cae sobre nuestra zona de apoyo.
    ( + )   Positivo, el siguiente ataque es nuestro, aunque solo podemos atacar por las alas.
    ( ++ )  Dos positivos, tenemos el siguiente ataque con todas las alternativas posibles.
*/