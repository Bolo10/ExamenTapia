const argv = require('./Config/yargs').argv;
const { analizar } = require('./Buscador/buscar')
const { printConsola, printGuardar, printmsg } = require('./Vista/consola')


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
                printGuardar(datos)

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