
import fsp from 'node:fs/promises';
import path from 'node:path';

// try{
//     const contenido = await fsp.readFile('./texto.txt','utf8')
//     console.log(contenido)
// }catch(e){
//     console.log(e)
// }
// lectura de archivos

// import fsp from 'node:fs/promises';

try{
    const ruta = path.join('.','texto.txt')
    await fsp.writeFile(ruta,'Contenido cambiado')
    const contenido = await fsp.readFile(ruta,'utf8')
    console.log(contenido)
}catch(e){
    console.log(e)
}

