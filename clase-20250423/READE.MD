Express, es una api para poder levantar servidores,
1. "/" es la ruta.
2. "GET" es el verbo & metodo.
3. callback, ejemplo =

const obtenerCosas = (req, res)=>{
    res.end('hola express')
}

app.get('/',obtenerCosas)
se ejecuta el callback, cuando el usuario haga una peticion 


