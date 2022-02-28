//Ejecutar npm start
const http = require('http')
const fs = require('fs')
const {resApi}=require('./index.js')

 http.createServer((req, res)=>{
    if(req.url.includes('/pokemones')){
        res.writeHead(200, {'Content-Type': 'application/json'})
        console.log('json entregado')
        res.end(JSON.stringify(resApi))
    }

    if(req.url =='/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.readFile('./public/index.html', 'utf-8', (err,inicio)=>{ 
            console.log('pagina de inicio renderizada')
            res.end(inicio)
        })
    }
}).listen(3000,()=>{ console.log(`Servidor escuchando en el puerto 3000 con el PID ${process.pid}`)} )