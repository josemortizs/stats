/*
    STATS - Estadísticas para el Voleibol
    Desarrollado por José Manuel Ortiz Sánchez
    josemortizs@gmail.com --- 697306046
*/
/* Sección de variables enlazadas con el DOM */

var datosAPP = document.getElementById('datos-app');
var buttonAddPlayer = document.getElementById('buttonAddPlayer');
var buttonAddPlay = document.getElementById('buttonAddPlay');
var addPlayerNumber = document.getElementById('addPlayerNumber'); 
var addPlayerName = document.getElementById('addPlayerName'); 
var addPlayerRol = document.getElementById('addPlayerRol');
var addPlay = document.getElementById('addPlay'); 
var closePanelReviewPlay = document.getElementsByClassName("close")[0];
var player = document.getElementById('player');
var reviewPlay = document.getElementById('reviewPlay');
var panelReviewPlay = document.getElementById('panelReviewPlay');

/* Sección de variables de App.js */

var partido = new Partido();

var jugadorSeleccionado = '1';
var gestoSeleccionado = 'S';
var jugadaSeleccionada = '--';
var posicionSeleccionada = '0';

/* Sección de funciones */

// Borra del localStorage el partido anterior y graba el nuevo.
function guardaPartido()
{
    localStorage.clear();
    localStorage.setItem(partido.getNombrePartido(), JSON.stringify(partido));
}

// Accede al localStorage y recupera el primer registro de éste. Lo almacena 
// en una variable e inicializa el objeto "partido".
function recuperaPartido()
{
    let partidoLocalStorage = JSON.parse(localStorage.getItem(localStorage.key(0)));
    
    partido.fromJSON(partidoLocalStorage);
}

/*
    Almacena en la variable números las referencias al DOM donde la clase sea
    'number-player', es decir, los números de los jugadores. Recibe el valor 
    del 'jugador' pulsado, recorre el array y si encuentra una coincidencia 
    le aplica el estilo 'opacity: 1'.
*/
function agregaOpacidadJugadores(numero)
{
    var numeros = document.getElementsByClassName('number-player');
    for (let i=0; i<numeros.length; i++)
    {
        if(numeros[i].innerHTML === numero)
        {
            numeros[i].style = ' opacity: 1';
        }
        else
        {
            numeros[i].style = ' opacity: 0.5';
        }
    }
}

// Similar a la anterior
function agregaOpacidadJugadas(jugada)
{
    var jugadas = document.getElementsByClassName('move-player');
    for (let i=0; i<jugadas.length; i++)
    {
        if(jugadas[i].innerHTML === jugada)
        {
            jugadas[i].style = ' opacity: 1';
        }
        else
        {
            jugadas[i].style = ' opacity: 0.5';
        }
    }
}

// Similar a agregaOpacidadJugadores();
function agregaOpacidadGestos(gesto)
{
    var gestos = document.getElementsByClassName('gesture-selected');
    for (let i=0; i<gestos.length; i++)
    {
        if(gestos[i].innerHTML === gesto)
        {
            gestos[i].style = ' opacity: 1';
        }
        else
        {
            gestos[i].style = ' opacity: 0.5';
        }
    }
}

function seleccionaJugada(jugada)
{
    jugadaSeleccionada = jugada;
    agregaOpacidadJugadas(jugada);
}

function seleccionaGesto(gesto)
{
    gestoSeleccionado = gesto;
    agregaOpacidadGestos(gesto);
}

function seleccionaJugador(numero)
{
    jugadorSeleccionado = numero;
    agregaOpacidadJugadores(numero);
}

function reiniciaFormularioInsercionJugadas()
{
    jugadorSeleccionado = 0;
    gestoSeleccionado = '';
    jugadaSeleccionada = '';

    agregaOpacidadGestos();
    agregaOpacidadJugadas();
    agregaOpacidadJugadores();
}

function agregaEventosModificacionPartidos()
{
    document.getElementsByClassName("close")[0].addEventListener('click', () => {
        panelReviewPlay.style.display = 'none';
    });

    document.getElementById('buttonEditPlay').addEventListener('click', () => {
        partido.fecha = document.getElementById('playDate').value;
        partido.hora = document.getElementById('playHour').value;
        partido.categoria = document.getElementById('playCategory').value;
        partido.equipo = document.getElementById('playTeam').value;
        partido.rival = document.getElementById('playVersus').value;
        guardaPartido();
        panelReviewPlay.style.display = 'none';
    });

    document.getElementById("buttonCancelEditPlay").addEventListener('click', () => {
        panelReviewPlay.style.display = 'none';
    });
}

function agregaEventosNuevoPartido()
{
    document.getElementsByClassName("close")[0].addEventListener('click', () => {
        panelReviewPlay.style.display = 'none';
    });

    document.getElementById('buttonNewPlay').addEventListener('click', () => {
        localStorage.clear();
        partido.fecha = document.getElementById('playDate').value;
        partido.hora = document.getElementById('playHour').value;
        partido.categoria = document.getElementById('playCategory').value;
        partido.equipo = document.getElementById('playTeam').value;
        partido.rival = document.getElementById('playVersus').value;
        partido.erroresRival = [0, 0, 0, 0, 0];
        partido.jugadores = [];
        guardaPartido();
        panelReviewPlay.style.display = 'none';
        datosAPP.innerHTML = renderizaEstadisticas();
        player.innerHTML = renderizaJugadores();
    });

    document.getElementById("buttonCancelNewPlay").addEventListener('click', () => {
        panelReviewPlay.style.display = 'none';
    });
}

function agregaEventosRevisaJugador(posicionJugadorArray)
{
    document.getElementsByClassName("close")[0].addEventListener('click', () => {
        panelReviewPlay.style.display = 'none';
    });

    document.getElementById('deletePlay').addEventListener('click', () => {
        partido.jugadores.splice(posicionJugadorArray, 1);
        guardaPartido();
        datosAPP.innerHTML = renderizaEstadisticas();
        player.innerHTML = renderizaJugadores();
        panelReviewPlay.style.display = 'none';
    });

    document.getElementById('delPlay').addEventListener('click', () => {
        partido.jugadores[posicionSeleccionada].jugadas.splice(document.getElementById('plays').value, 1);
        guardaPartido();
        datosAPP.innerHTML = renderizaEstadisticas();
        panelReviewPlay.innerHTML = renderizaDatosJugador(posicionJugadorArray);
        agregaEventosRevisaJugador(posicionJugadorArray);
    });

    document.getElementById("buttonCancelReviewPlay").addEventListener('click', () => {
        panelReviewPlay.style.display = 'none';
    });
}

function revisaJugador(posicionJugadorArray)
{
    posicionSeleccionada = posicionJugadorArray;
    panelReviewPlay.innerHTML = renderizaDatosJugador(posicionJugadorArray);
    panelReviewPlay.style.display = 'block';
    agregaEventosRevisaJugador(posicionJugadorArray);
}

function renderizaDatosJugador(posicionJugadorArray)
{
    var datosJugador = `
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <h2>INFORME INDIVIDUAL</h2>
                </div>
                <div class="modal-body">
                    <h4>${partido.jugadores[posicionJugadorArray].nombre}</h4>
                    <div class="plays-left">
                        <select id= "plays" name="plays" size="10">
    `;
                        

    for(let i=0;i<partido.jugadores[posicionJugadorArray].jugadas.length; i++)
    {
        datosJugador+= `<option value="${i}">${partido.jugadores[posicionJugadorArray].jugadas[i].tipo} ${partido.jugadores[posicionJugadorArray].jugadas[i].resultado}</option>`;
    }

    let estadisticasIndividuales = partido.jugadores[posicionJugadorArray].getDatosEstadisticos();
    let psNeg = (parseFloat(estadisticasIndividuales[13]) + parseFloat(estadisticasIndividuales[15])).toFixed(1);
    let psPos = (parseFloat(estadisticasIndividuales[17]) + parseFloat(estadisticasIndividuales[19]) + parseFloat(estadisticasIndividuales[21])).toFixed(1);
    let prNeg = (parseFloat(estadisticasIndividuales[2]) + parseFloat(estadisticasIndividuales[4]) + parseFloat(estadisticasIndividuales[6])).toFixed(1);
    let prPos = (parseFloat(estadisticasIndividuales[8]) + parseFloat(estadisticasIndividuales[10]));
    let paNeg = (parseFloat(estadisticasIndividuales[24]) + parseFloat(estadisticasIndividuales[26]) + parseFloat(estadisticasIndividuales[28])).toFixed(1);
    let paPos = (parseFloat(estadisticasIndividuales[30]) + parseFloat(estadisticasIndividuales[32]));
    let pbNeg = (parseFloat(estadisticasIndividuales[35]) + parseFloat(estadisticasIndividuales[37]) + parseFloat(estadisticasIndividuales[39])).toFixed(1);
    let pbPos = (parseFloat(estadisticasIndividuales[41]) + parseFloat(estadisticasIndividuales[43]));
    let pdNeg = (parseFloat(estadisticasIndividuales[46]) + parseFloat(estadisticasIndividuales[48]) + parseFloat(estadisticasIndividuales[50])).toFixed(1);
    let pdPos = (parseFloat(estadisticasIndividuales[52]) + parseFloat(estadisticasIndividuales[54]));

    datosJugador+= `
                        </select>
                        <div class="button" id="delPlay">ELIMINAR JUGADA</div>
                    </div>
                    <div class="plays-right">
                        <div class="est-ind">SAQUE</div>
                        <div class="por-ind est-neg">${estadisticasIndividuales[12] + estadisticasIndividuales[14]} (${psNeg} %)</div>
                        <div class="por-ind est-pos">${estadisticasIndividuales[16] + estadisticasIndividuales[18] + estadisticasIndividuales[20]} (${psPos} %)</div>
                        <div class="est-ind">RECEPCIÓN</div>
                        <div class="por-ind est-neg">${estadisticasIndividuales[1] + estadisticasIndividuales[3] + estadisticasIndividuales[5]} (${prNeg} %)</div>
                        <div class="por-ind est-pos">${estadisticasIndividuales[7] + estadisticasIndividuales[9]} (${prPos} %)</div>
                        <div class="est-ind">ATAQUE</div>
                        <div class="por-ind est-neg">${estadisticasIndividuales[23] + estadisticasIndividuales[25] + estadisticasIndividuales[27]} (${paNeg} %)</div>
                        <div class="por-ind est-pos">${estadisticasIndividuales[29] + estadisticasIndividuales[31]} (${paPos} %)</div>
                        <div class="est-ind">BLOQUEO</div>
                        <div class="por-ind est-neg">${estadisticasIndividuales[34] + estadisticasIndividuales[36] + estadisticasIndividuales[38]} (${pbNeg} %)</div>
                        <div class="por-ind est-pos">${estadisticasIndividuales[40] + estadisticasIndividuales[42]} (${pbPos} %)</div>
                        <div class="est-ind">DEFENSA</div>
                        <div class="por-ind est-neg">${estadisticasIndividuales[45] + estadisticasIndividuales[47] + estadisticasIndividuales[49]} (${pdNeg} %)</div>
                        <div class="por-ind est-pos">${estadisticasIndividuales[51] + estadisticasIndividuales[53]} (${pdPos} %)</div>
                    </div>
                    <div class="clearfix"></div>
                    <p>
                        <div class="button" id="deletePlay">ELIMINAR JUGADOR</div>
                        <div class="button" id="buttonCancelReviewPlay">CANCELAR</div>
                    </p>
                    </div>
                    <div class="clearfix"></div>
                    <div class="modal-footer">
                        <div id="info-partido-2">${partido.getDatosGenerales()}</div>
                    </div>
                </div>
    `;
    return datosJugador;
}

function renderizaDatosNuevoPartido()
{
    var datosPartido = `
        <div class="modal-content">
            <div class="modal-header">
                <span class="close">&times;</span>
                <h2>NUEVO PARTIDO</h2>
            </div>
            <div class="modal-body">
                <p><input type="date" id="playDate" placeholder="Fecha"></p>
                <p><input type="text" id="playHour" placeholder="Hora"></p>
                <p><select id="playCategory">
                    <option value="Infantil Femenino">Infantil Femenino</option>
                    <option value="Cadete Femenino">Cadete Femenino</option>
                    <option value="Juvenil Femenino">Juvenil Femenino</option>
                    <option value="Senior Femenino">Senior Femenino</option>
                    <option value="Infantil Masculino">Infantil Masculino</option>
                    <option value="Cadete Masculino">Cadete Masculino</option>
                    <option value="Juvenil Masculino">Juvenil Masculino</option>
                    <option value="Senior Masculino">Senior Masculino</option>
                </select></p>
                <p><input type="text" id="playTeam" placeholder="Equipo"></p>
                <p><input type="text" id="playVersus" placeholder="Rival"></p>                    
                <p>
                    <div class="button" id="buttonNewPlay">NUEVO</div>
                    <div class="button" id="buttonCancelNewPlay">CANCELAR</div>
                </p>
            </div>
            <div class="clearfix"></div>
            <div class="modal-footer">
                <div id="info-partido-2">STATS - Estadística para Voleibol</div>
            </div>
        </div>
    `;
    return datosPartido;
}

function renderizaDatosPartido()
{
    var datosPartido = `
        <div class="modal-content">
            <div class="modal-header">
                <span class="close">&times;</span>
                <h2>EDITAR PARTIDO</h2>
            </div>
            <div class="modal-body">
                <p><input type="text" id="playDate" placeholder="Fecha" value="${partido.fecha}"></p>
                <p><input type="text" id="playHour" placeholder="Hora" value="${partido.hora}"></p>
                <p><select id="playCategory">
                    <option selected value="${partido.categoria}">${partido.categoria}</option>
                    <option value="Infantil Femenino">Infantil Femenino</option>
                    <option value="Cadete Femenino">Cadete Femenino</option>
                    <option value="Juvenil Femenino">Juvenil Femenino</option>
                    <option value="Senior Femenino">Senior Femenino</option>
                    <option value="Infantil Masculino">Infantil Masculino</option>
                    <option value="Cadete Masculino">Cadete Masculino</option>
                    <option value="Juvenil Masculino">Juvenil Masculino</option>
                    <option value="Senior Masculino">Senior Masculino</option>
                </select></p>
                <p><input type="text" id="playTeam" placeholder="Equipo" value="${partido.equipo}"></p>
                <p><input type="text" id="playVersus" placeholder="Rival" value="${partido.rival}"></p>                    
                <p>
                    <div class="button" id="buttonEditPlay">EDITAR</div>
                    <div class="button" id="buttonCancelEditPlay">CANCELAR</div>
                </p>
            </div>
            <div class="clearfix"></div>
            <div class="modal-footer">
                <div id="info-partido-2">${partido.getDatosGenerales()}</div>
            </div>
        </div>
    `;
    return datosPartido;
}

function renderizaJugadores()
{
    var jugadores = '';

    for (let i = 0; i < partido.jugadores.length; i++)
    {
       jugadores += `<div onclick="seleccionaJugador('${partido.jugadores[i].numero}')" class="number-player">${partido.jugadores[i].numero}</div>`;
    }

   return jugadores;
}

function renderizaEstadisticas()
{
    var estadisticas = 
    `
    <table>
        <tr>
            <th colspan="5">DATOS DEL PARTIDO</th>    
        </tr>
        <tr>
            <th>FECHA</th>
            <th>HORA</th>
            <th>CATEGORÍA</th>
            <th>EQUIPO</th>
            <th>RIVAL</th>
        </tr>
        <tr>
            <td>${partido.fecha}</td>
            <td>${partido.hora}</td>
            <td>${partido.categoria}</td>
            <td>${partido.equipo}</td>
            <td>${partido.rival}</td>
        </tr>
    </table>

    <table>
        <tr>
            <th rowspan="2">#</th>
            <th rowspan="2">Jugador</th>
            <th colspan="6" class='border2'>Saque</th>
            <th colspan="6" class='border2'>Recepción</th>
            <th colspan="6" class='border2'>Ataque</th>
            <th colspan="6" class='border2'>Bloqueo</th>
            <th colspan="6" class='border2'>Defensa</th>
        </tr>
        <tr>
            <th class='border2'>ST</th>
            <th>--</th>
            <th>-</th>
            <th>:</th>
            <th>+</th>
            <th>++</th>
            <th class='border2'>RT</th>
            <th>--</th>
            <th>-</th>
            <th>:</th>
            <th>+</th>
            <th>++</th>                    
            <th class='border2'>AT</th>
            <th>--</th>
            <th>-</th>
            <th>:</th>
            <th>+</th>
            <th>++</th>
            <th class='border2'>BT</th>
            <th>--</th>
            <th>-</th>
            <th>:</th>
            <th>+</th>
            <th>++</th>                     
            <th class='border2'>DT</th>
            <th>--</th>
            <th>-</th>
            <th>:</th>
            <th>+</th>
            <th>++</th>
        </tr>
    `;

    var totales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var porcentajes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];;
    for(let i=0; i<partido.jugadores.length; i++)
    {
        let estadisticasIndividuales = partido.jugadores[i].getDatosEstadisticos();

        for(let y=0; y<estadisticasIndividuales.length; y++)
        {
            if(!isNaN(estadisticasIndividuales[y]))
            {
                estadisticasIndividuales[y] = parseFloat(estadisticasIndividuales[y]);
            }
        }

        totales[0]+=estadisticasIndividuales[11];
        totales[1]+=estadisticasIndividuales[12];
        totales[2]+=estadisticasIndividuales[14];
        totales[3]+=estadisticasIndividuales[16];
        totales[4]+=estadisticasIndividuales[18];
        totales[5]+=estadisticasIndividuales[20];
        totales[6]+=estadisticasIndividuales[0];
        totales[7]+=estadisticasIndividuales[1];
        totales[8]+=estadisticasIndividuales[3];
        totales[9]+=estadisticasIndividuales[5];
        totales[10]+=estadisticasIndividuales[7];
        totales[11]+=estadisticasIndividuales[9];
        totales[12]+=estadisticasIndividuales[22];
        totales[13]+=estadisticasIndividuales[23];
        totales[14]+=estadisticasIndividuales[25];
        totales[15]+=estadisticasIndividuales[27];
        totales[16]+=estadisticasIndividuales[29];
        totales[17]+=estadisticasIndividuales[31];
        totales[18]+=estadisticasIndividuales[33];
        totales[19]+=estadisticasIndividuales[34];
        totales[20]+=estadisticasIndividuales[36];
        totales[21]+=estadisticasIndividuales[38];
        totales[22]+=estadisticasIndividuales[40];
        totales[23]+=estadisticasIndividuales[42];
        totales[24]+=estadisticasIndividuales[44];
        totales[25]+=estadisticasIndividuales[45];
        totales[26]+=estadisticasIndividuales[47];
        totales[27]+=estadisticasIndividuales[49];
        totales[28]+=estadisticasIndividuales[51];
        totales[29]+=estadisticasIndividuales[53];

        if (i%2 == 0)
        {
            estadisticas+= `<tr onclick="revisaJugador('${i}')">`;
        }
        else
        {
            estadisticas+= `<tr class='sombreado' onclick="revisaJugador('${i}')">`;
        }
            estadisticas+= `<td class='font-b' rowspan="2">`+ partido.jugadores[i].numero +`</td>`;
            estadisticas+= `<td>`+ partido.jugadores[i].nombre +`</td>`;
            estadisticas+= `<td  class='border2'>`+estadisticasIndividuales[11]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[12]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[14]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[16]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[18]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[20]+`</td>`;
            estadisticas+= `<td  class='border2'>`+estadisticasIndividuales[0]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[1]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[3]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[5]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[7]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[9]+`</td>`;
            estadisticas+= `<td  class='border2'>`+estadisticasIndividuales[22]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[23]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[25]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[27]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[29]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[31]+`</td>`;
            estadisticas+= `<td  class='border2'>`+estadisticasIndividuales[33]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[34]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[36]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[38]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[40]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[42]+`</td>`;
            estadisticas+= `<td  class='border2'>`+estadisticasIndividuales[44]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[45]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[47]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[49]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[51]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[53]+`</td>`;
        estadisticas+= `</tr>`;
        if (i%2 == 0)
        {
            estadisticas+= `<tr onclick="revisaJugador('${i}')">`;
        }
        else
        {
            estadisticas+= `<tr class='sombreado' onclick="revisaJugador('${i}')">`;
        }
            estadisticas+= `<td>`+ partido.jugadores[i].posicion +`</td>`;
            estadisticas+= `<td  class='border2'>`+'%'+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[13]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[15]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[17]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[19]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[21]+`</td>`;
            estadisticas+= `<td  class='border2'>`+'%'+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[2]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[4]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[6]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[8]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[10]+`</td>`;
            estadisticas+= `<td  class='border2'>`+'%'+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[24]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[26]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[28]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[30]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[32]+`</td>`;
            estadisticas+= `<td  class='border2'>`+'%'+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[35]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[37]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[39]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[41]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[43]+`</td>`;
            estadisticas+= `<td  class='border2'>`+'%'+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[46]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[48]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[50]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[52]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[54]+`</td>`;
        estadisticas+= `</tr>`;
    }

    estadisticas+= `<tr>
                        <td class='font-b' rowspan="2">#</td>
                        <td rowspan="2">TOTALES</td>`;

    for(let x=0; x<totales.length; x++)
    {
        if(x%6 == 0)
        {
            estadisticas+= `<td class='border2'>${totales[x]}</td>`;
        }
        else
        {
            estadisticas+= `<td>${totales[x]}</td>`;
        }
    }

    estadisticas+= `</tr><tr>`

    porcentajes[0]=100;
    porcentajes[1]=(totales[1]*100/totales[0]).toFixed(1);
    porcentajes[2]=(totales[2]*100/totales[0]).toFixed(1);
    porcentajes[3]=(totales[3]*100/totales[0]).toFixed(1);
    porcentajes[4]=(totales[4]*100/totales[0]).toFixed(1);
    porcentajes[5]=(totales[5]*100/totales[0]).toFixed(1);
    porcentajes[6]=100;
    porcentajes[7]=(totales[7]*100/totales[6]).toFixed(1);
    porcentajes[8]=(totales[8]*100/totales[6]).toFixed(1);
    porcentajes[9]=(totales[9]*100/totales[6]).toFixed(1);
    porcentajes[10]=(totales[10]*100/totales[6]).toFixed(1);
    porcentajes[11]=(totales[11]*100/totales[6]).toFixed(1);
    porcentajes[12]=100;
    porcentajes[13]=(totales[13]*100/totales[12]).toFixed(1);
    porcentajes[14]=(totales[14]*100/totales[12]).toFixed(1);
    porcentajes[15]=(totales[15]*100/totales[12]).toFixed(1);
    porcentajes[16]=(totales[16]*100/totales[12]).toFixed(1);
    porcentajes[17]=(totales[17]*100/totales[12]).toFixed(1);
    porcentajes[18]=100;
    porcentajes[19]=(totales[19]*100/totales[18]).toFixed(1);
    porcentajes[20]=(totales[20]*100/totales[18]).toFixed(1);
    porcentajes[21]=(totales[21]*100/totales[18]).toFixed(1);
    porcentajes[22]=(totales[22]*100/totales[18]).toFixed(1);
    porcentajes[23]=(totales[23]*100/totales[18]).toFixed(1);
    porcentajes[24]=100;
    porcentajes[25]=(totales[25]*100/totales[24]).toFixed(1);
    porcentajes[26]=(totales[26]*100/totales[24]).toFixed(1);
    porcentajes[27]=(totales[27]*100/totales[24]).toFixed(1);
    porcentajes[28]=(totales[28]*100/totales[24]).toFixed(1);
    porcentajes[29]=(totales[29]*100/totales[24]).toFixed(1);

    for(let x=0; x<porcentajes.length; x++)
    {
        if(x%6 == 0)
        {
            estadisticas+= `<td class='border2'>${porcentajes[x]}</td>`;
        }
        else
        {
            estadisticas+= `<td>${porcentajes[x]}</td>`;
        }
    }

    estadisticas+= `</tr>
                    </table>`;

    estadisticas+= `
                    <table>
                    <tr>
                        <th colspan="5">ERRORES DEL EQUIPO RIVAL</th>    
                    </tr>
                    <tr>
                        <th>EN SAQUE</th>
                        <th>DOBLES, LEVANTAMIENTOS</th>
                        <th>EN ATAQUE</th>
                        <th>EN BLOQUEO, REDES</th>
                        <th>ERROR DE POSICIÓN O ROTACIÓN</th>
                    </tr>
                    <tr>
                        <td onclick="cambiarErrores(0);" title="Doble click para modificar">${partido.erroresRival[0]}</td>
                        <td onclick="cambiarErrores(1);" title="Doble click para modificar">${partido.erroresRival[1]}</td>
                        <td onclick="cambiarErrores(2);" title="Doble click para modificar">${partido.erroresRival[2]}</td>
                        <td onclick="cambiarErrores(3);" title="Doble click para modificar">${partido.erroresRival[3]}</td>
                        <td onclick="cambiarErrores(4);" title="Doble click para modificar">${partido.erroresRival[4]}</td>
                    </tr>
                </table>
    `;

    return estadisticas;
}

// Recibe por parámetro la posición del error en el Array y le suma 1.
function agregaErrorRival(error)
{
    partido.erroresRival[error]++;
    guardaPartido();
    datosAPP.innerHTML = renderizaEstadisticas();

}

/*
    Recibe por parámetro la posición en el Array, pregunta por el valor correcto
    y en caso de que se ingrese un valor válido es modificado en el Array.
    Después guarda los datos y renderiza de nuevo las estadísticas actualizadas.
*/
function cambiarErrores(error)
{
    var errores = prompt('¿Cual es el número correcto de errores?', partido.erroresRival[error]);
    if (errores != null)
    {
        partido.erroresRival[error] = errores;
        guardaPartido();
        datosAPP.innerHTML = renderizaEstadisticas();
    }
}

/* Fin de: Sección de funciones */
/* ******************************************************************************* */
/* Sección de eventos */

reviewPlay.addEventListener('click', () => {
    panelReviewPlay.innerHTML = renderizaDatosPartido();
    panelReviewPlay.style.display = 'block';
    agregaEventosModificacionPartidos();
});

addPlay.addEventListener('click', () => {
    panelReviewPlay.innerHTML = renderizaDatosNuevoPartido();
    panelReviewPlay.style.display = 'block';
    agregaEventosNuevoPartido();
});

closePanelReviewPlay.addEventListener('click', () => {
    panelReviewPlay.style.display = 'none';
});

/*
    La siguiente función hace que no se muestre el modal JavaScript,
    mostrado en pantalla, en caso de que se pinche fuera de éste.
*/
window.onclick = function(event) {
    if (event.target == panelReviewPlay) {
        panelReviewPlay.style.display = "none";
    }
}

buttonAddPlayer.addEventListener('click', () => {
    partido.jugadores.push(new Jugador(addPlayerNumber.value, addPlayerName.value, addPlayerRol.value));
    guardaPartido();
    datosAPP.innerHTML = renderizaEstadisticas();
    player.innerHTML = renderizaJugadores();
    addPlayerNumber.value = 0;
    addPlayerName.value = '';
});

buttonAddPlay.addEventListener('click', () => {
    let jugada = new Jugada(gestoSeleccionado, jugadaSeleccionada);
    for (let k = 0; k<partido.jugadores.length; k++)
    {
        if(partido.jugadores[k].numero == jugadorSeleccionado)
        {
            partido.jugadores[k].agregarJugada(jugada);
        } 
    }
    guardaPartido();
    datosAPP.innerHTML = renderizaEstadisticas();
    reiniciaFormularioInsercionJugadas();
});

/* Fin de sección de enventos */
/* ******************************************************************************* */
/* Instrucciones iniciales */

if (localStorage.length > 0)
{
    recuperaPartido();
    datosAPP.innerHTML = renderizaEstadisticas();
    player.innerHTML = renderizaJugadores();

}
