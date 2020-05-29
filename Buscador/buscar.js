const getJSON = require("../Modelo/importCSV").getJSON
const lookup = require('country-data').lookup;

async function buscarPais(pais, year, json) {
    var jsonOB = json
    let aux
    for (var item in jsonOB) {
        temp = jsonOB[item]['Country Code']
        if (pais == temp) {
            aux = jsonOB[item]
            break;
        }
    }
    return { name: aux['Country Name'], percent: aux[year], anio: year, code: pais, inf: aux['Indicator Name'] }
}

async function analizar(pais, year, csvpath) {
    let errorCode = 'El parámetro country debe ser un código ISO 3166 ALPHA-3.'
    try {
        pais = pais.toUpperCase()
        let codeP = lookup.countries({ alpha3: pais })[0];
        if (codeP == undefined) {
            throw new Error(errorCode)
        }

    } catch (error) { //ISO 3166 ALPHA-3
        throw new Error(errorCode)
    }
    let msg
    let jsonOB = await getJSON(csvpath).then().catch(err => msg = err.message);
    try {
        let paisOB = await buscarPais(pais, year, jsonOB)

        let comparacion
            //Verificar existencia de registros
        if (!Number.isInteger(year) || year < 1960) {
            msg = `El valor del parámetro year deber ser un número mayor o igual a 1960`
            throw new Error(msg)
        } else if (isNaN(paisOB.percent)) {
            msg = `No existen registros para el año ${year}`
            throw new Error(msg)
        } else if (paisOB.percent <= 0) {
            comparacion = `El país ${paisOB.name} no tiene usuarios de internet resgistrados  en el año ${year}  `
        }
        return [paisOB, comparacion]
    } catch (error) {
        throw new Error(msg)
    }
}
module.exports = {
    analizar,
    buscarPais

}