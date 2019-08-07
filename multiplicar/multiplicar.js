const fs = require('fs');
const colors = require('colors/safe');


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El Valor introducido ${base} No es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });
    });
}

let listarTabla = (base, limite) => {

    console.log('====================================='.yellow);
    console.log(`========tabla de ${ base }===========`.bgMagenta.white);
    console.log('====================================='.blue);

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base*i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}