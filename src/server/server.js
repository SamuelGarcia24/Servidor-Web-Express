import express from 'express'
import path from 'path'

export const startServer = (options) => {
    const { port, public_path = 'public' } = options
    
    const app = express()

    //para poder usa middlewares use la palabra use (express)
    app.use(express.static(public_path)) //ponemos disponible el contenido estatico

    app.get('/pagina', (req, res)=>{
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    //lo usamos para incializar el servidor, le damos el puerto

    app.listen(port, () => {
        console.log(`Escuchando el puerto ${port}`)
    })


}