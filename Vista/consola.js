const colors = require('../Config/colores').colors;

function printConsola(datos) {
    console.log(colors.titulos(
        '______________________________________________________________\n|             UNIVERSIDAD POLITÉCNICA SALESIANA              |\n|          INGENIERÍA EN CIENCIAS DE LA COMPUTACIÓN          |\n|                   EXAMEN PLATAFORMAS WEB                   |\n|                 PERSONAS QUE USAN INTERNET                 |\n|____________________________________________________________|\n'));
    console.log(colors.info(`- Año ${datos[0].anio} \n`));
    console.log(colors.info(`- Code ${datos[0].code} \n`));
    console.log(colors.info(`- Porcentaje ${datos[0].percent} \n`));
    console.log(colors.data(`- Pais ${datos[0].name} `));
    console.log(colors.data(`- Pais ${datos[1]} `));






    console.log("\n");
}

function printmsg(str, typemsg) {
    switch (typemsg) {
        case "error":
            console.log(colors.error(str));
            break
        case "warn":
            console.log(colors.warn(str));
            break
        case "link":
            console.log(colors.warn(str.substring(0, 26)), colors.data(str.substring(26, 49)), colors.warn(str.substring(49, str.length)));
            break
        case "titulos":
            console.log(colors.titulos(str));
            break
        default:
            console.log(colors.data(str))
            break
    }
}
module.exports = {
    printConsola,
    printmsg
}