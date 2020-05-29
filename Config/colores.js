const colors = require('colors/safe')

colors.setTheme({
    titulos: ['blue', 'bold'],
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'brightGreen',
    data: 'blue',
    help: 'cyan',
    warn: 'yellow',
    debug: 'brightMagenta',
    error: 'red'

});
module.exports = {
    colors
}