/*
    STATS - Estadísticas para el Voleibol
    Desarrollado por José Manuel Ortiz Sánchez
    josemortizs@gmail.com --- 697306046
*/

var navegador = navigator.userAgent;

/*
    Esta función se encarga de recibir un "contenido" a exportar, 
    en nuestro caso serán los datos del partido previamente convertidos
    a datos de tipo String. También recibe el nombre del archivo y el 
    tipo de contenido. Este último parámetro podría haber sido obviado, 
    puesto que en nuestro caso siempre será: 'text/plain'. 
    Para mayor modalaridad he decidido dejarlo así para poder exportarlo
    a otras APP en el futuro.
*/
function exportaPartido(contenido, nombreArchivo, tipoContenido)
{
    var enlace = document.createElement("a");
    var archivo = new Blob([contenido], {type: tipoContenido});
    enlace.href = URL.createObjectURL(archivo);
    enlace.download = nombreArchivo;
    enlace.click();

    if (navegador.includes('Mozilla')) // Pendiente de implementar export para mozilla
    {
        console.log("Es Mozilla");
    }
}

function importaPartido(e)
{
    var archivo = e.target.files[0];
    if (!archivo)
    {
        return;
    } 

    var leerArchivo = new FileReader();
    leerArchivo.onload = function (e) {
        var contenido = e.target.result;
        var json = JSON.parse(contenido);
        guardaPartidoJSON(json);  
    };
    leerArchivo.readAsText(archivo);
}

function guardaPartidoJSON(json)
{

    partido.jugadores = [];

    partido.fromJSON(json);
    guardaPartido();
    datosAPP.innerHTML = renderizaEstadisticas();
    player.innerHTML = renderizaJugadores();
}

document.getElementById('exportPlay').addEventListener('click', () => {
    let nombreArchivo = prompt('¿Nombre del archivo?');
    if (nombreArchivo != null || nombreArchivo != "")
    {
        nombreArchivo += ".txt";
        let datosPartido = JSON.stringify(partido);
        exportaPartido(datosPartido, nombreArchivo, 'text/plain');  
    }      
});

document.getElementById('file-input').addEventListener('change', importaPartido, false);
