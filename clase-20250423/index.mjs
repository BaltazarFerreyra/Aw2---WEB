import express from 'express'

const PUERTO = 3000

// instancia de servidor express
const app = express()

const obtenerCosas = (req, res)=>{

    res.set('content-type','text/html')
    res.status(200)
    res.end('<h1>hola express</h1>')
}

app.get('/',obtenerCosas)


app.get('/saludo', (req, res)=>{
    res.end('hola bonito')
})



//post
app.post('/', (req, res)=>{
    res.end('estoy en verbo POST y ruta /')
})

app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})

