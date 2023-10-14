const express = require('express');
const app = express()
const port = 8080

app.use(express.static('public2'))

app.get('/', (req,res)=>{
    res.send('Home Page')
})

app.get('/hola-mundo', (req, res)=>{
    res.send('Hola mundo en su respectiva ruta')
})

app.get('*', (req,res)=>{
    res.send(__dirname + '/public/404.hmtl')
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost ${port}`);
})