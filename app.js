// Requireds

// const fs = require('express')
// const fs = require('./fs')


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors')
const argv = require('./config/yargs').argv

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resp => console.log(resp.red))
            .catch(err => console.log(err))
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comando no reconocido');
}

// console.log(argv.base);

// let parametro = argv[2];
// let base = parametro.split('=')[1]