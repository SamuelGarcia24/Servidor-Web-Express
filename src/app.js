const { envs } = require('./config/env')
const { startServer } = require('./server/server')


const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

// Funcion agnostica autoconvocada
// agnostica porque no tiene nombre
// Autoconvocada porque la llamamos con el parentesis

(async()=> {
    main()
})()