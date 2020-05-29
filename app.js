const argv = require('./Config/yargs').argv;
const { analizar } = require('./Buscador/buscar')
const { printConsola, printmsg } = require('./Vista/consola')
const arch = require('./Modelo/guardartxt').crearArchivo

let comando = argv._[0]
let path = argv.file
let pais = argv.country
let year = argv.year

let data = ""
let procesar = (callback) => {
    if (comando != 'mostrar' && comando != 'guardar') {
        console.log("Comando no reconocido");
    } else if (comando == 'mostrar') {
        analizar(pais, year, path)
            .then(datos => {
                data = datos
                printConsola(datos)

                callback();
            })
            .catch(err => printmsg(err.message, "error"))
    } else {
        analizar(pais, year, path)
            .then(datos => {
                data = datos
                arch(datos[0].anio, datos[0].name, datos[0].percent, datos[0].code)

                callback();
            })
            .catch(err => printmsg(err.message, "error"))
    }
}

function switchF() {

    switch (comando) {
        case 'mostrar':





            break;
        case 'guardar':

            break;

        default:
            console.log("Comando no reconocido");
    }
}

procesar(switchF)