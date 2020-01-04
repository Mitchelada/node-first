const fs = require('fs')
const colors = require('colors')


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('la base no es un numero'.red);
            return;
        }

        let list = ''
        for (let i = 1; i <= limite; i++) {
            list += `${base}*${i} = ${base*i} \n`

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, list, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`.bgCyan)
        })
    })
}

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(limite) || !Number(base)) {
            reject(`Uno de los argumentos no es un numero`);
        }
        let list = ''
        console.log("======================================".green);
        console.log(`Tabla del ${base} con limite ${limite} \n`.green);
        console.log("======================================".green);


        for (let i = 1; i <= limite; i++) {
            list += `${base}*${(i)} = ${base*(i)} \n`;
        }
        resolve(list)
    })

}


module.exports = {
    crearArchivo,
    listarTabla
}