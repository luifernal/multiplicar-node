// console.log(process.argv);
const colors = require('colors');
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


console.log('Limite', argv.limite);
console.log('base', argv.base);


switch (comando) {

    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${ colors.rainbow(archivo) }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}