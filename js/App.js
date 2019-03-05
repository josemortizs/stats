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
    `;


    for(let i=0; i<partido.jugadores.length; i++)
    {
        // Arreglar este código, crear un for y reordenar
        // el Array que devuelve la clase Jugador en su método 
        // getDatosEstadisticos()
        estadisticas+= `<tr>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
            estadisticas+= `<td>`+  +`</td>`;
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
console.log(partido); 

datosAPP.innerHTML = renderizaEstadisticas();