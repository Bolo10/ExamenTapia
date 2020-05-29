const colors = require('../Config/colores').colors;
const arch = require('../Modelo/guardartxt').crearArchivo

function printConsola(datos) {
    console.log(colors.titulos(
        '______________________________________________________________\n|             UNIVERSIDAD POLITÉCNICA SALESIANA              |\n|          INGENIERÍA EN CIENCIAS DE LA COMPUTACIÓN          |\n|                   EXAMEN PLATAFORMAS WEB                   |\n|                 PERSONAS QUE USAN INTERNET                 |\n|____________________________________________________________|\n'));

    console.log(colors.info(`Datos: ${datos[0].inf}\n`));
    console.log(colors.data(`Pais: ${datos[0].name}\n`));
    console.log(colors.data(`Año: ${datos[0].anio} \n`));
    if (datos[0].percent <= 0) {
        console.log(colors.data(`Valor: ${datos[1]} `));
    } else {
        console.log(colors.data(`Valor: ${datos[0].percent} \n`));
    }

}

function printGuardar(datos) {
    arch(datos[0].anio, datos[0].name, datos[0].percent, datos[0].code, datos[0].inf)
        .then(mensaje => console.log(colors.blue(mensaje)))
        .catch(err => console.log(colors.red(err)));
}

function printmsg(str, typemsg) {
    switch (typemsg) {
        case "error":
            console.log(colors.error(str));
            break

        default:
            console.log(colors.data(str))
            break
    }
}
module.exports = {
    printConsola,
    printGuardar,
    printmsg
}