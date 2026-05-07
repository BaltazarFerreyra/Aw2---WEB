import express from 'express'
import productos from '/productos.mjs'

const PUERTO = 3000

const app = express()

// configurar una api test basica

// Modulo productos
// GET  /api/v1/productos
app.get('/api/v1/productos', (req, res)=>{
    res.json(productos)
})

// // GET  /api/v1/productos/:id
// app.get('/api/v1/productos/:id')  

// // POST   /api/v1/productos
// app.post('/api/v1/productos') 

// // PUT  /api/v1/productos/:id
// app.put('/api/v1/productos/:id')

// // DELETE   /api/v1/productos/:id
// app.delete('/api/v1/productos/:id')




app.listen(PUERTO)