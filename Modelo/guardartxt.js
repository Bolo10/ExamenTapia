const fs = require('fs'); // LLAMADO AL PAQUETE FILESYSTEM LECTURA ESCRITURA DE ARCHIVOS

let crearArchivo = (anio, pais, val, code, inf) => {
    return new Promise((resolve, reject) => {

        let data = '';
        data += `Datos: ${inf}\n`
        data += `Pais: ${pais}\n`
        data += `Anio: ${anio}\n`
        data += `Valor: ${val}\n`


        fs.writeFile(`resultados/${code}-${anio}.txt`, data, (err) => {
            if (err)
                reject(err);
            else {
                let name = `resultados/${code}-${anio}.txt`
                resolve(`Archivo Guardado Existosamente: ${name}`);
            }

        });
    });
}


module.exports = {
    crearArchivo, //EXPORTACION DE FUNCIONES COMO MODULOS

}