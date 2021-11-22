const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'es la base de la tabla'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'es el limite de la tabla'
                })
                .check( (argv,options)=>{
                    if (isNaN(argv.b) || isNaN(argv.h)){
                        throw 'la base tiene que ser un número'
                    }
                    return true
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'muestra la tabla en consola'
                })
                .argv;


module.exports = argv;