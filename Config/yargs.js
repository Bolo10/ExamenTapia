const mostrar = {
    file: {
        demand: true,
        alias: 'f',
        desc: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
    },
    country: {
        demand: true,
        alias: 'c',
        desc: 'Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3.'
    },
    year: {
        alias: 'y',
        default: 2018,
        desc: 'Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 2018.'
    }

}
const guardar = {
    file: {
        demand: true,
        alias: 'f',
        desc: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
    },
    country: {
        demand: true,
        alias: 'c',
        desc: 'Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3.'
    },
    year: {
        alias: 'y',
        default: 2018,
        desc: 'Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 2018.'
    },

}

const argv = require('yargs').command('mostrar', ' Este comando mostrará la informacion buscada del pais.', mostrar).command('guardar', ' Este comando almacenará los resultados de las busqueda en un archivo .txt.', guardar).argv;

module.exports = {
    argv
}