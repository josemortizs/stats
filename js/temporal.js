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

'use strict'

window.addEventListener('load', () => 
{
    /* ---------------------------------------------------------- */
    /* -----------------  SECCIÃ“N DE PREGUNTAS  ----------------- */
    /* ---------------------------------------------------------- */

    function pregunta (encabezado, valor, afirmativo, negativo, neutro)
    {
        this.encabezado = encabezado;
        this.valor = valor;
        this.afirmativo = afirmativo;
        this.negativo = negativo;
        this.neutro = neutro;
    }

    var preguntas = new Array();

    preguntas[0] = new pregunta(
        "Â¿Ha pasado menos de un aÃ±o desde la Ãºltima revisiÃ³n de aceite y filtros?",
        2,
        "RevisiÃ³n de aceite y filtros realizada",
        "RevisiÃ³n de aceite y filtros pendiente",
        "SerÃ­a recomendable preguntar al propietario por la revisiÃ³n de aceite y filtros");
        
    preguntas[1] = new pregunta(
        "Â¿Tiene, el vehÃ­culo, la ITV al dÃ­a?",
        2,
        "ITV correcta",
        "ITV pendiente",
        "Es muy importante saber si el vehÃ­culo ha pasado la ITV");
    
    preguntas[2] = new pregunta(
        "Â¿EstÃ¡n los neumÃ¡ticos en buen estado?",
        3,
        "Correcto estado de los neumÃ¡ticos",
        "NeumÃ¡ticos en mal estado",
        "Pregunte y fÃ­jate en el estado de los neumÃ¡ticos");
    
    preguntas[3] = new pregunta(
        "Â¿EstÃ¡ la carrocerÃ­a en buen estado?",
        2,
        "CarrocerÃ­a en buen estado",
        "CarrocerÃ­a en mal estado, gasto adicional en chapista",
        "Un mal estado de la carrocerÃ­a redundarÃ­a en un nuevo gasto, revise bien el vehÃ­culo, las fotografÃ­as, pregunte al propietario, etc.");
    
    preguntas[4] = new pregunta(
        "Â¿Ha comprobado el precio de mercado?, Â¿es acorde al precio que piden por el vehÃ­culo?",
        5,
        "Precio de mercado acorde",
        "Precio de mercado no acorde",
        "Revise, en pÃ¡ginas de venta de segunda mano, si existen vehÃ­culos similares y si el precio es acorde");
    
    preguntas[5] = new pregunta(
        "Â¿Son acordes, los kilÃ³metros, con el precio del vehÃ­culo?",
        2,
        "KilÃ³metros acordes con el precio del vehÃ­culo",
        "KilÃ³metros no acordes con el precio del vehÃ­culo, puede indicar una manipulaciÃ³n ilegal de Ã©stos",
        "Es importante revisar si los kilÃ³metros son acordes al precio del vehÃ­culo, revise este dato en pÃ¡ginas de venta de segunda mano");
    
    preguntas[6] = new pregunta(
        "Â¿Ha sido positivo el examen de ruidos, suspensiÃ³n, embrague, caja de cambios, etc?",
        4,
        "ConducciÃ³n correcta, sin ruidos ni problemas aparentes",
        "El vehÃ­culo deberÃ¡ pasar por un taller para revisiÃ³n de posibles problemas",
        "Es importante probar el vehÃ­culo antes de su compra para intentar detectar posibles problemas mecÃ¡nicos (Ruidos, frenos, suspensiÃ³n, embrague, caja de cambios...)");
    
    preguntas[7] = new pregunta(
        "Â¿EstÃ¡n en buen estado las correas de distribuciÃ³n y alternador?",
        3,
        "Correas de distribuciÃ³n y alternador en buen estado",
        "Es necesario un costoso cambio de correas de distribuciÃ³n y alternador",
        "Consulte al propietario cuÃ¡ndo fuÃ© la Ãºltima vez que sustituyÃ³ las correas de distribuciÃ³n y alternador, pues se trata de un cambio con alto coste econÃ³mico"); 
    
    preguntas[8] = new pregunta(
        "Â¿Ha comprobado que el vehÃ­culo no haya sufrido algÃºn siniestro de importancia?",
        3,
        "El coche no ha sufrido siniestros previos",
        "Ha sufrido siniestros previos, posibles secuelas de Ã©stos",
        "Pregunte al propietario si el vehÃ­culo ha sufrido algÃºn siniestro de importancia"); 
    
    preguntas[9] = new pregunta(
        "Â¿Se trata de un vehÃ­culo nacional (SÃ) o de importaciÃ³n (NO)?",
        2,
        "Se trata de un vehÃ­culo nacional, pocas trabas administrativas",
        "VehÃ­culo de importaciÃ³n, hay que sumarle las trabas administrativas al respecto",
        "Es indispensable saber si se trata de un vehÃ­culo nacional o de importaciÃ³n, pues la carga burocrÃ¡tica es distinta");
    
    preguntas[10] = new pregunta(
        "Â¿EstÃ¡ en buen estado el interior del vehÃ­culo?",
        2,
        "Estado interior del vehÃ­culo correcto",
        "El interior del vehÃ­culo estÃ¡ en mal estado, necesitarÃ¡ reparaciones",
        "Revise, o pida fotografÃ­as, del interior del vehÃ­culo con el fin de verificar si dicho interior necesita reparaciones");
    
    preguntas[11] = new pregunta(
        "Â¿ComprÃ³ el vehÃ­culo nuevo su actual propietario?",
        2,
        "El vehÃ­culo ha tenido un solo propietario",
        "El vehÃ­culo ha tenido mÃ¡s de un propietario, un nÃºmero alto de Ã©stos puede significar repetidos problemas mecÃ¡nicos",
        "Hable con el dueÃ±o y pregunte si comprÃ³ el vehÃ­culo nuevo o si Ã©ste ha tenido varios propietarios, pues podrÃ­a significar que el vehÃ­culo tiene repetidos problemas mecÃ¡nicos y se deshacen de Ã©ste");
    
    preguntas[12] = new pregunta(
        "Â¿Es positivo el informe redactado, sobre el vehÃ­culo, por la DirecciÃ³n General de TrÃ¡fico?",
        3,
        "Informe de la DGT positivo",
        "Informe de la DGT negativo, vehÃ­culo con cargas",
        "Es importante solicitar, a la DirecciÃ³n General de TrÃ¡fico, un informe sobre posibles cargas del vehÃ­culo");
    
    preguntas[13] = new pregunta(
        "Â¿Duerme el vehÃ­culo en una cochera (SÃ) o al aire libre (NO)?",
        2,
        "El vehÃ­culo duerme en una cochera, menor exposiciÃ³n de la carrocerÃ­a a la erosiÃ³n del exterior",
        "El vehÃ­culo duerme en la calle, su carrocerÃ­a estÃ¡ continuamente expuesta a la erosiÃ³n del exterior",
        "Solicite informaciÃ³n sobre dÃ³nde se guarda el coche, Â¿en una cochera?, Â¿aparcado en la calle?, es importante conocer la exposiciÃ³n de la carrocerÃ­a a la erosiÃ³n del exterior");
    
    preguntas[14] = new pregunta(
        "El desgaste del interior (volante, palanca del cambio, tapizadoâ€¦), Â¿es acorde con los kilÃ³metros y la antigÃ¼edad del vehÃ­culo?",
        2,
        "El desgaste es acorde",
        "Desgaste por mal uso, o bien el vehÃ­culo tiene mÃ¡s uso del que indica el vendedor, posible fraude en kilometraje",
        "DeberÃ­as revisar que el desgaste sea acorde a la antigÃ¼edad del vehÃ­culo y a su uso segÃºn kilÃ³metros");

    /* ---------------------------------------------------------- */
    /* ---------------------------------------------------------- */
    // Variables y 'for' para el porcentaje de "recomendaciÃ³n" -- 
    var contadorPreguntas = 0;
    var puntuacion = 0;
    var totalPuntos = 0;

    for(let i=0; i<preguntas.length;i++)
    {
        totalPuntos += preguntas[i].valor;
        console.log(totalPuntos);
    }
    /* ---------------------------------------------------------- */
    /* ---------------------------------------------------------- */

    var testPositivos = document.getElementById("test-positivos");
    var testNegativos = document.getElementById("test-negativos");
    var testNeutros = document.getElementById("test-neutros");
    var testPregunta = document.getElementById("test-pregunta");
    var testPorcentaje = document.getElementById("test-porcentaje");
    var botonAfirmativo = document.getElementById("test-afirmativo");
    var botonNegativo = document.getElementById("test-negativo");
    var botonNeutro = document.getElementById("test-neutro");
    var imprimirPDF = document.getElementById("imprimirPDF");
    var testBarraVerde = document.getElementById("test-barra-verde");
    var testBarraRoja = document.getElementById("test-barra-roja");

    var razonesPositivas = new Array();
    var razonesNegativas = new Array();
    var razonesNeutras = new Array();

    var porcentaje = 0;

    testPositivos.innerHTML = "";
    testNegativos.innerHTML = "";
    testNeutros.innerHTML = "";
    testPregunta.innerHTML = preguntas[contadorPreguntas].encabezado;
    
    imprimirPDF.addEventListener("click", function()
    {
        let mywindow = window.open('', 'PRINT', 'height=650, width=900, top=100, left=150');
        let title = "GuiAl IngenierÃ­a - 634539295 - guialingenieria@gmail.com - www.guialingenieria.com";

        mywindow.document.write(`<html><head><title>${title}</title></head><body>`);
        mywindow.document.write(formateaDatosTest());
        mywindow.document.write(`</body></html>`);

        mywindow.document.close();  //necesario para IE >= 10
        mywindow.focus();           //necesario para IE >= 10

        mywindow.print();
        mywindow.close();

        return true;
    });

    function formateaDatosTest()
    {
        var datos = "";
        datos += `&nbsp`;
        datos += `&nbsp`;
        datos += `<img src="https://www.guialingenieria.com/wp-content/uploads/2018/07/cabecera_web_centrada2.jpg" style="width: 100%">`; //La imagen debe de estar cargada en el DOM
        datos += `&nbsp`;
        datos += `<center><h3 style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">TEST PARA COMPRAS DE COCHES DE SEGUNDA MANO</h3></center>`;
    
        datos += ``;

        datos += `<table style="width:100%">
                    <tr>
                        <th style="background:green;
                                   color: white;
                                   font-weight: bold;
                                   border: 1px solid black;
                                   text-align: center;
                                   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                        ">
                            <center>ASPECTOS POSITIVOS DE LA COMPRA</center>
                        </th>
                    </tr>`
        ;

        for (let i=0; i<razonesPositivas.length; i++)
        {
            datos  += `
                            <tr>
                                <td style="background: rgb(145, 255, 145);
                                           border: 1px solid black;
                                           text-align: center;
                                           font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"
                                >
                                    ${razonesPositivas[i]}
                                </td>
                            </tr>`;
        }
        datos += `</table>`;

        datos += `&nbsp`;

        datos += `<table style="width:100%">
                    <tr>
                        <th style="background:#d2332a;
                                   color: white;
                                   font-weight: bold;
                                   border: 1px solid black;
                                   text-align: center
                                   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                        ">
                            <center>ASPECTOS NEGATIVOS DE LA COMPRA</center>
                        </th>
                    </tr>`
        ;

        for (let i=0; i<razonesNegativas.length; i++)
        {
            datos  += `
                            <tr>
                                <td style="background: rgb(255, 161, 169);
                                           border: 1px solid black;
                                           text-align: center;
                                           font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"
                                >
                                    ${razonesNegativas[i]}
                                </td>
                            </tr>`;
        }
        datos += `</table>`;

        datos += `&nbsp`;

        datos += `<table style="width:100%">
                    <tr>
                        <th style="background:gray;
                                   color: white;
                                   font-weight: bold;
                                   border: 1px solid black;
                                   text-align: center
                                   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    ">
                            <center>TENGA EN CUENTA LAS SIGUIENTES RECOMENDACIONES ANTES DE EFECTUAR LA COMPRA</center>
                        </th>
                    </tr>`
        ;

        for (let i=0; i<razonesNeutras.length; i++)
        {
            datos  += `
                            <tr>
                                <td style="background: rgb(223, 223, 223);
                                           border: 1px solid black;
                                           text-align: center;
                                           font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"
                                >
                                    ${razonesNeutras[i]}
                                </td>
                            </tr>`;
        }
        datos += `</table>`;
        datos += `&nbsp`;
        datos += `<div class="clearfix" style="padding:20px"></div>`;
        datos += `<div class="clearfix"></div>`;
        datos += `&nbsp`;
        if (parseInt(porcentaje) >= 75)
        {
            datos += `  <div style="text-align: center;
                                    float: left;
                                    width: 73%;
                                    height: 60px;
                                    line-height: 30px;
                                    margin-left: 5%;
                                    margin-top: 10px;
                                    margin-right: 2%;
                                    margin-bottom: 10px;
                                    padding-top: 10px;
                                    padding-bottom: 10px;
                                    background: #d2332a;
                                    color: white;
                                    font-weight: bold
                                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                        ">
                            En un porcentaje, del 1 al 100, Â¿cuÃ¡nto creemos que es recomendable su compra?
                        </div>

                        <div style="text-align: center;
                                    width: 14%;
                                    height: 60px;
                                    float: left;
                                    padding-top: 10px;
                                    padding-bottom: 10px;
                                    margin-top: 10px;
                                    margin-right: 4%;
                                    padding-left: 1%;
                                    float: left;
                                    background: green;
                                    color: white;
                                    font-weight: bold;
                                    font-size: 24px;
                                    line-height: 60px
                                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                        ">
                            ${parseInt(porcentaje)} %
                        </div>`;
        }
        else if (parseInt(porcentaje) < 75 && parseInt(porcentaje) > 0 )
        {
            datos += `  <div style="    text-align: center;
                                        float: left;
                                        width: 73%;
                                        height: 60px;
                                        line-height: 30px;
                                        margin-left: 5%;
                                        margin-top: 10px;
                                        margin-right: 2%;
                                        margin-bottom: 10px;
                                        padding-top: 10px;
                                        padding-bottom: 10px;
                                        background: #d2332a;
                                        color: white;
                                        font-weight: bold;
                                        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                            ">
                                En un porcentaje, del 1 al 100, Â¿cuÃ¡nto creemos que es recomendable su compra?
                            </div>

                            <div style="text-align: center;
                                        width: 14%;
                                        height: 60px;
                                        float: left;
                                        padding-top: 10px;
                                        padding-bottom: 10px;
                                        margin-top: 10px;
                                        margin-right: 4%;
                                        padding-left: 1%;
                                        float: left;
                                        background: #d2332a;
                                        color: white;
                                        font-weight: bold;
                                        font-size: 24px;
                                        line-height: 60px
                                        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                            ">
                                ${parseInt(porcentaje)} %
                            </div>`;
        }
        else
        {
            datos += `  <div style="    text-align: center;
                                        float: left;
                                        width: 73%;
                                        height: 60px;
                                        line-height: 30px;
                                        margin-left: 5%;
                                        margin-top: 10px;
                                        margin-right: 2%;
                                        margin-bottom: 10px;
                                        padding-top: 10px;
                                        padding-bottom: 10px;
                                        background: #d2332a;
                                        color: white;
                                        font-weight: bold;
                                        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            ">
                En un porcentaje, del 1 al 100, Â¿cuÃ¡nto creemos que es recomendable su compra?
            </div>

            <div style="text-align: center;
                                    width: 14%;
                                    height: 60px;
                                    float: left;
                                    padding-top: 10px;
                                    padding-bottom: 10px;
                                    margin-top: 10px;
                                    margin-right: 4%;
                                    padding-left: 1%;
                                    float: left;
                                    background: #d2332a;
                                    color: white;
                                    font-weight: bold;
                                    font-size: 24px;
                                    line-height: 60px
                                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            ">
                0 %
            </div>`;
        }
        datos += `&nbsp`;
        datos += `  <div style="width:20%;margin-left:40%;margin-right:40%;text-align:center">
                        <img src="https://www.guialingenieria.com/wp-content/uploads/2018/07/logo_blanco_512.jpg" style="width:30%">
                    </div>
                 `;
        datos += `  <div style="width:80%;margin-left:10%;margin-right:10%;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
                        <center><h4>GuiAl IngenierÃ­a</h4></center>
                        <center><h5>www.guialingenieria.com - 634539295 - guialingenieria@gmail.com</h5></center>
                        <center><span style="font-size:10px">GuiAl IngenierÃ­a le ofrece gratuitamente 
                                                            este cuestionario para orientarle en su compra
                                                            y darle a conocer diversos aspectos a tener en cuenta 
                                                            antes de realizar dicha compra.
                        </span></center>

                        <center><span style="font-size:10px">Si necesita asesoramiento personalizado o que le 
                                                            acompaÃ±emos en su compra, para evitar posibles fraudes,
                                                            no dude en contactar con nosotros. Gestionaremos su 
                                                            compra, nos desplazaremos con usted a revisar el vehÃ­culo,
                                                            haremos la prueba de circulaciÃ³n y, si se llegase a un acuerdo,
                                                            le tramitaremos la transferencia del vehÃ­culo.
                        </span></center>
                    </div>
                 `;
        datos += `&nbsp`;
        datos += `&nbsp`;
        datos += `<img src="https://www.guialingenieria.com/wp-content/uploads/2018/08/oficina.jpg" style="width: 100%">`; //La imagen debe de estar cargada en el DOM


        return datos;
    }

    botonAfirmativo.addEventListener("click", function()
    {
        razonesPositivas[razonesPositivas.length] = preguntas[contadorPreguntas].afirmativo;
        actualizaListadoPositivos();
        actualizaPregunta();
        actualizaPuntuacion(preguntas[contadorPreguntas-1].valor);
    });

    botonNegativo.addEventListener("click", function()
    {
        razonesNegativas[razonesNegativas.length] = preguntas[contadorPreguntas].negativo;
        actualizaListadoNegativos();
        actualizaPregunta();
        actualizaPuntuacion((preguntas[contadorPreguntas-1].valor)*-1);
    });

    botonNeutro.addEventListener("click", function()
    {
        razonesNeutras[razonesNeutras.length] = preguntas[contadorPreguntas].neutro;
        actualizaListadoNeutros();
        actualizaPregunta();
        actualizaPuntuacion(-1);
    });
    
    function actualizaListadoPositivos()
    {
        var temporal = `
                        <table>
                            <tr>
                                <th>
                                    POSITIVO
                                </th>
                            </tr>`
        ;

        for (let i=0; i<razonesPositivas.length; i++)
        {
            temporal  += `
                            <tr>
                                <td>
                                    ${razonesPositivas[i]}
                                </td>
                            </tr>`;
        }

        temporal +=     `
                        </table>`;

        testPositivos.innerHTML = temporal;
    }

    function actualizaListadoNegativos()
    {
        var temporal = `
                        <table>
                            <tr>
                                <th>
                                    NEGATIVO
                                </th>
                            </tr>`
        ;

        for (let i=0; i<razonesNegativas.length; i++)
        {
            temporal  += `
                            <tr>
                                <td>
                                    ${razonesNegativas[i]}
                                </td>
                            </tr>`;
        }

        temporal +=     `
                        </table>`;

        testNegativos.innerHTML = temporal;
    }

    function actualizaListadoNeutros()
    {
        var temporal = `
                        <table>
                            <tr>
                                <th>
                                    RECOMENDACIONES
                                </th>
                            </tr>`
        ;

        for (let i=0; i<razonesNeutras.length; i++)
        {
            temporal  += `
                            <tr>
                                <td>
                                    ${razonesNeutras[i]}
                                </td>
                            </tr>`;
        }

        temporal +=     `
                        </table>`;

        testNeutros.innerHTML = temporal;
    }

    function actualizaPregunta()
    {
        if (contadorPreguntas < preguntas.length -1)
        {
            contadorPreguntas++;
            testPregunta.innerHTML = preguntas[contadorPreguntas].encabezado;
        }
        else 
        {
            document.getElementById("test-preguntas").style.display = 'none';
            document.getElementById("test-info").style.display = 'none';
            document.getElementById("imprimirPDF").style.display = 'block';
            alert("GuiAl IngenierÃ­a - Si necesita asesoramiento en la compra de su vehÃ­culo no dude en contactar con nosotros: 634539295 - guialingenieria@gmail.com");
        }
    }

    function actualizaPuntuacion(valor)
    {
        puntuacion += valor;
        console.log(puntuacion);
        porcentaje = (puntuacion * 100) / totalPuntos;
        actualizaBarraPuntuacion((porcentaje > 0) ? porcentaje : 0);
    }

    function actualizaBarraPuntuacion(porcentaje)
    {
        testPorcentaje.innerHTML = parseInt(porcentaje) + ' %';

        if(porcentaje <=5)
        {
            testBarraRoja.style.width = '90%';
            testBarraVerde.style.width = '0%';
            document.getElementById("test-porcentaje").style.background = "#d2332a";
        }
        else if(porcentaje >5 && porcentaje <=10)
        {
            testBarraRoja.style.width = '85%';
            testBarraVerde.style.width = '5%';
            document.getElementById("test-porcentaje").style.background = "#d2332a";
        }
        else if(porcentaje >10 && porcentaje <=15)
        {
            testBarraRoja.style.width = '80%';
            testBarraVerde.style.width = '10%';
            document.getElementById("test-porcentaje").style.background = "#d2332a";
        }
        else if(porcentaje >15 && porcentaje <=20)
        {
            testBarraRoja.style.width = '75%';
            testBarraVerde.style.width = '15%';
            document.getElementById("test-porcentaje").style.background = "#d2332a";
        }
        else if(porcentaje >20 && porcentaje <=25)
        {
            testBarraRoja.style.width = '70%';
            testBarraVerde.style.width = '20%';
            document.getElementById("test-porcentaje").style.background = "#d2332a";
        }
        else if(porcentaje >25 && porcentaje <=30)
        {
            testBarraRoja.style.width = '65%';
            testBarraVerde.style.width = '25%';
            document.getElementById("test-porcentaje").style.background = "#d2332a";
        }
        else if(porcentaje >30 && porcentaje <=35)
        {
            testBarraRoja.style.width = '60%';
            testBarraVerde.style.width = '30%';
            document.getElementById("test-porcentaje").style.background = "#d2332a";
        }
        else if(porcentaje >35 && porcentaje <=40)
        {
            testBarraRoja.style.width = '55%';
            testBarraVerde.style.width = '35%';
            document.getElementById("test-porcentaje").style.background = "#d2332a";
        }
        else if(porcentaje >40 && porcentaje <=45)
        {
            testBarraRoja.style.width = '50%';
            testBarraVerde.style.width = '40%';
            document.getElementById("test-porcentaje").style.background = "#d2332a";
        }
        else if(porcentaje >45 && porcentaje <=50)
        {
            testBarraRoja.style.width = '45%';
            testBarraVerde.style.width = '45%';
            document.getElementById("test-porcentaje").style.background = "#d2332a";
        }
        else if(porcentaje >50 && porcentaje <=55)
        {
            testBarraRoja.style.width = '40%';
            testBarraVerde.style.width = '50%';
            document.getElementById("test-porcentaje").style.background = "#d2332a";
        }
        else if(porcentaje >55 && porcentaje <=60)
        {
            testBarraRoja.style.width = '35%';
            testBarraVerde.style.width = '55%';
            document.getElementById("test-porcentaje").style.background = "#d2332a";
        }
        else if(porcentaje >60 && porcentaje <=65)
        {
            testBarraRoja.style.width = '30%';
            testBarraVerde.style.width = '60%';
            document.getElementById("test-porcentaje").style.background = "#d2332a";
        }
        else if(porcentaje >65 && porcentaje <=70)
        {
            testBarraRoja.style.width = '25%';
            testBarraVerde.style.width = '65%';
            document.getElementById("test-porcentaje").style.background = "#d2332a";
        }
        else if(porcentaje >70 && porcentaje <=75)
        {
            testBarraRoja.style.width = '20%';
            testBarraVerde.style.width = '70%';
            document.getElementById("test-porcentaje").style.background = "#d2332a";
        }
        else if(porcentaje >75 && porcentaje <=80)
        {
            testBarraRoja.style.width = '15%';
            testBarraVerde.style.width = '75%';
            document.getElementById("test-porcentaje").style.background = "green";
        }
        else if(porcentaje >80 && porcentaje <=85)
        {
            testBarraRoja.style.width = '10%';
            testBarraVerde.style.width = '80%';
            document.getElementById("test-porcentaje").style.background = "green";
        }
        else if(porcentaje >85 && porcentaje <=90)
        {
            testBarraRoja.style.width = '5%';
            testBarraVerde.style.width = '85%';
            document.getElementById("test-porcentaje").style.background = "green";
        }
        else if(porcentaje >90 && porcentaje <=95)
        {
            testBarraRoja.style.width = '3%';
            testBarraVerde.style.width = '87%';
            document.getElementById("test-porcentaje").style.background = "green";
        }
        else if(porcentaje >95 && porcentaje <=99)
        {
            testBarraRoja.style.width = '1%';
            testBarraVerde.style.width = '89%';
            document.getElementById("test-porcentaje").style.background = "green";
        }
        else if(porcentaje >99)
        {
            testBarraRoja.style.width = '0%';
            testBarraVerde.style.width = '90%';
            document.getElementById("test-porcentaje").style.background = "green";
        }
    }
});