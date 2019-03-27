/*
    STATS - Estadísticas para el Voleibol
    Desarrollado por José Manuel Ortiz Sánchez
    josemortizs@gmail.com --- 697306046
*/
/*
    ------------------Archivo Print.js------------------
    Alberga la función usada para imprimir partido y el 
    evento (click) que lanza dicha función. También está 
    definida la función renderizaEstadisticasCSS(), muy 
    similar a renderizaEstadisticas(). He tenido que 
    generar esta función redundante casi al 100% para
    agregarle los estilos propios de la impresión CSS.
*/

document.getElementById('printPlay').addEventListener('click', () => {
    let nombreArchivo = prompt('¿Nombre y/o datos del partido?', 'STATS - Estadísticas para Voleibol');
    imprimirPartido(nombreArchivo);
});


function imprimirPartido(nombreArchivo)
{
    let mywindow = window.open('', 'PRINT', 'height=650, width=900, top=100, left=150');
    let title = nombreArchivo;
    let footer = "STATS - Estadísticas para Voleibol";

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
                                footer{
                                    position: absolute;
                                    bottom: 0;
                                }
                                .border2{
                                    border-left: 4px solid #5cb85c;
                                }
                                .sombreado{
                                    background-color: rgb(212, 211, 211);
                                }
                            </style>`);
    mywindow.document.write(`</head><body>`);
    mywindow.document.write(renderizaEstadisticasCSS());
    
    if(partido.jugadores.length > 8)
    {
        mywindow.document.write(`<footer style="position:relative;">${footer}</footer>`);
    } else {
        mywindow.document.write(`<footer>${footer}</footer>`);
    }                            

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
            estadisticas+= `<td class='border2'>`+estadisticasIndividuales[11]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[12]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[14]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[16]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[18]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[20]+`</td>`;
            estadisticas+= `<td class='border2'>`+estadisticasIndividuales[0]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[1]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[3]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[5]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[7]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[9]+`</td>`;
            estadisticas+= `<td class='border2'>`+estadisticasIndividuales[22]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[23]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[25]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[27]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[29]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[31]+`</td>`;
            estadisticas+= `<td class='border2'>`+estadisticasIndividuales[33]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[34]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[36]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[38]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[40]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[42]+`</td>`;
            estadisticas+= `<td class='border2'>`+estadisticasIndividuales[44]+`</td>`;
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
            estadisticas+= `<td class='border2'>`+'%'+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[13]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[15]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[17]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[19]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[21]+`</td>`;
            estadisticas+= `<td class='border2'>`+'%'+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[2]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[4]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[6]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[8]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[10]+`</td>`;
            estadisticas+= `<td class='border2'>`+'%'+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[24]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[26]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[28]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[30]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[32]+`</td>`;
            estadisticas+= `<td class='border2'>`+'%'+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[35]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[37]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[39]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[41]+`</td>`;
            estadisticas+= `<td>`+estadisticasIndividuales[43]+`</td>`;
            estadisticas+= `<td class='border2'>`+'%'+`</td>`;
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
                        <td>${partido.erroresRival[0]}</td>
                        <td>${partido.erroresRival[1]}</td>
                        <td>${partido.erroresRival[2]}</td>
                        <td>${partido.erroresRival[3]}</td>
                        <td>${partido.erroresRival[4]}</td>
                    </tr>
                </table>
    `;

    return estadisticas;
}