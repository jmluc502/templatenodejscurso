const express= require('express')
const req = require('express/lib/request')
const app = express()
const port = 8080


app.use(express.static('public')) //para publicar la carpeta 


//para validar las rutas respectivas
app.get('/hola-mundo', (req,res)=>{
    res.send('Hola mundo en su respectiva ruta')
})

app.get('*', (req,res)=>{
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, ()=>{
    console.log(`Example app listening at httpp://localhost: ${port}`); 
})