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