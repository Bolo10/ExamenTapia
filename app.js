const argv = require('./Config/yargs').argv;
const { analizar } = require('./Buscador/buscar')
const { printConsola, printmsg } = require('./Vista/consola')
let comando = argv._[0]
let path = argv.file
let pais = argv.country
let year = argv.year
let out = argv.out
let data = ""
let procesar = (callback) => {
    if (comando != 'publicar' && comando != 'guardar') {
        console.log("Comando no reconocido");
    } else {
        analizar(pais, year, path)
            .then(datos => {
                data = datos
                printConsola(datos)

                callback();
            })
            .catch(err => printmsg(err.message, "error"))
    }
}

function switchF() {

    switch (comando) {
        case 'publicar':
            printmsg(publicar(data), "link")
            break;
        case 'guardar':
            let ob = toJson(data, out)
            str = `${ob.mensaje}`
            printmsg(str, "warn")

            break;

        default:
            console.log("Comando no reconocido");
    }
}
if (out === true && comando == 'guardar') {
    printmsg("Especifique un nombre el parámetro out", "error");
} else if (comando == 'guardar' && (out.includes("<") || out.includes(">") || out.includes(":") || out.includes("\"") || out.includes("/") || out.includes("\\") || out.includes("|") || out.includes("?") || out.includes("*"))) {
    printmsg("El nombre del archivo json no es válido", "error");
} else {
    procesar(switchF)

}