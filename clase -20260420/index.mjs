import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rutaArchivo = fileURLToPath(import.meta.url);
const carpeta = path.dirname(rutaArchivo);
const rutaJson = path.join(carpeta, 'usuarios.json');

const puerto = 3000;
const urlApi = 'https://api.escuelajs.co/api/v1/users';

const servidor = http.createServer(async (pedido, respuesta) => {
    const ruta = pedido.url;
    const metodo = pedido.method;

    respuesta.setHeader('Content-Type', 'application/json; charset=utf-8');

    try {
        if (metodo === 'GET' && ruta === '/usuarios') {
            const peticion = await fetch(urlApi);
            if (!peticion.ok) throw new Error();
            
            const datos = await peticion.json();
            await fs.writeFile(rutaJson, JSON.stringify(datos, null, 2));

            const contenido = await fs.readFile(rutaJson, 'utf-8');
            respuesta.statusCode = 200;
            return respuesta.end(contenido);
        }

        respuesta.statusCode = 404;
        respuesta.end(JSON.stringify({ mensaje: "Recurso no encontrado" }));

    } catch (error) {
        respuesta.statusCode = 500;
        respuesta.end(JSON.stringify({ mensaje: "Error interno del servidor" }));
    }
});

servidor.listen(puerto, () => {
    console.log(`Servidor en puerto ${puerto}`);
});