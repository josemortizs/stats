document.getElementById('printPlay').addEventListener('click', () => {
    imprimirPartido();
});


function imprimirPartido()
{
    let mywindow = window.open('', 'PRINT', 'height=650, width=900, top=100, left=150');
    let title = "STATS - Estadísticas para Voleibol";

    mywindow.document.write(`<html><head><title>${title}</title>`);
    mywindow.document.write(`<style>
                                table{
                                    width: 100%;
                                    text-align: center;
                                    border-collapse: collapse;
                                    margin-top: 3%;
                                }
                                th{
                                    border: 1px solid #5cb85c;
                                    background: #9ad49a;
                                    color: white;
                                    font-weight: bold;
                                }
                                td{
                                    border: 0.5px solid #5cb85c;
                                }
                            </style>`);
    mywindow.document.write(`</head><body>`);
    mywindow.document.write(renderizaEstadisticasCSS());
    mywindow.document.write(`</body></html>`);

    mywindow.document.close();  //necesario para IE >= 10
    mywindow.focus();           //necesario para IE >= 10

    mywindow.print();
    mywindow.close();

    return true;
}

function renderizaEstadisticasCSS()
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

    estadisticas+= `<tr>
                        <td class='font-b' rowspan="2">#</td>
                        <td rowspan="2">TOTALES</td>`;

    for(let x=0; x<totales.length; x++)
    {
        estadisticas+= `<td>${totales[x]}</td>`;
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
        estadisticas+= `<td>${porcentajes[x]}</td>`;
    }

    estadisticas+= `</tr>
                    </table>`;

    return estadisticas;
}