const fs = require('fs');

const crearTabla = async ( base, listar, hasta) => {

    try {

        let salida = '';

        for (let i = 1; i <= hasta; i++) {
        
            salida += `${base} x ${i} = ${base*i}\n`;
            
        }

        if (listar) {

            console.log(salida);
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        return `tabla-${base}.txt`;


        
    } catch (err) {

        throw err;
        
    }

    
}


module.exports = {
     crearTabla
};