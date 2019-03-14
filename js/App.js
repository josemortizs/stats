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
            <td>ST</td>
            <td>--</td>
            <td>-</td>
            <td>:</td>
            <td>+</td>
            <td>++</td>
            <td>RT</td>
            <td>--</td>
            <td>-</td>
            <td>:</td>
            <td>+</td>
            <td>++</td>                    
            <td>AT</td>
            <td>--</td>
            <td>-</td>
            <td>:</td>
            <td>+</td>
            <td>++</td>
            <td>BT</td>
            <td>--</td>
            <td>-</td>
            <td>:</td>
            <td>+</td>
            <td>++</td>                     
            <td>DT</td>
            <td>--</td>
            <td>-</td>
            <td>:</td>
            <td>+</td>
            <td>++</td>
        </tr>
    `;


    for(let i=0; i<partido.jugadores.length; i++)
    {
        let estadisticasIndividuales = partido.jugadores[i].getDatosEstadisticos();
        estadisticas+= `<tr>`;
            estadisticas+= `<td rowspan="2">`+ partido.jugadores[i].numero +`</td>`;
            estadisticas+= `<td rowspan="2">`+ partido.jugadores[i].nombre +`</td>`;
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
            estadisticas+= `<tr>`;
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



/* Instrucciones iniciales */

var partido = new Partido();
var datosAPP = document.getElementById('datos-app');


recuperaPartido();

datosAPP.innerHTML = renderizaEstadisticas();
