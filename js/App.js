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

function guardaPartido()
{
    localStorage.clear();
    localStorage.setItem(partido.getNombrePartido(), JSON.stringify(partido));
}

function recuperaPartido()
{
    let partidoLocalStorage = JSON.parse(localStorage.getItem(localStorage.key(0)));
    
    partido.fromJSON(partidoLocalStorage);
}

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


    datosJugador+= `
                        </select>
                        <div class="button" id="delPlay">ELIMINAR JUGADA</div>
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
            <th rowspan="2">#</th>
            <th rowspan="2">Jugador</th>
            <th colspan="6">Saque</th>
            <th colspan="6">Recepción</th>
            <th colspan="6">Ataque</th>
            <th colspan="6">Bloqueo</th>
            <th colspan="6">Defensa</th>
        </tr>
        <tr>
            <th>ST</th>
            <th>--</th>
            <th>-</th>
            <th>:</th>
            <th>+</th>
            <th>++</th>
            <th>RT</th>
            <th>--</th>
            <th>-</th>
            <th>:</th>
            <th>+</th>
            <th>++</th>                    
            <th>AT</th>
            <th>--</th>
            <th>-</th>
            <th>:</th>
            <th>+</th>
            <th>++</th>
            <th>BT</th>
            <th>--</th>
            <th>-</th>
            <th>:</th>
            <th>+</th>
            <th>++</th>                     
            <th>DT</th>
            <th>--</th>
            <th>-</th>
            <th>:</th>
            <th>+</th>
            <th>++</th>
        </tr>
    `;


    for(let i=0; i<partido.jugadores.length; i++)
    {
        let estadisticasIndividuales = partido.jugadores[i].getDatosEstadisticos();
        estadisticas+= `<tr onclick="revisaJugador('${i}')">`;
            estadisticas+= `<td class='font-b' rowspan="2">`+ partido.jugadores[i].numero +`</td>`;
            estadisticas+= `<td>`+ partido.jugadores[i].nombre +`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[11]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[12]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[14]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[16]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[18]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[20]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[0]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[1]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[3]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[5]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[7]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[9]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[22]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[23]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[25]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[27]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[29]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[31]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[33]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[34]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[36]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[38]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[40]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[42]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[44]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[45]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[47]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[49]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[51]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[53]+`</td>`;
        estadisticas+= `</tr>`;
        estadisticas+= `<tr onclick="revisaJugador('${i}')">`;
            estadisticas+= `<td>`+ partido.jugadores[i].posicion +`</td>`;
            estadisticas+= `<td>`+'%'+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[13]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[15]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[17]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[19]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[21]+`</td>`;
            estadisticas+= `<td>`+'%'+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[2]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[4]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[6]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[8]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[10]+`</td>`;
            estadisticas+= `<td>`+'%'+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[24]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[26]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[28]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[30]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[32]+`</td>`;
            estadisticas+= `<td>`+'%'+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[35]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[37]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[39]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[41]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[43]+`</td>`;
            estadisticas+= `<td>`+'%'+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[46]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[48]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[50]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[52]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[54]+`</td>`;
        estadisticas+= `</tr>`;

    }


    estadisticas+= `</table>`;

    return estadisticas;
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
