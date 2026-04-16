import http from 'node:http'

const app = http.createServer((peticion, respusta)=>{
    if (peticion.method === 'GET'){
        if(peticion.url === '/'){
            respusta.statusCode = 200
        return respusta.end('estamos en la raiz')
    }
        if(peticion.url === '/usuarios'){
            respusta.statusCode = 200
        return respusta.end('estamos en la usuarios')
    }}
    respuesta.statusCode = 404
    respuesta.end('ruta no encontrada')
})

app.listen(3000,()=>{
    console.log('servidor corriendo en http://localhost:3000')
})