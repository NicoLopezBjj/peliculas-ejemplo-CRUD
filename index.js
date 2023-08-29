import express from 'express'
const app = express ()

const path = require ('path')

import funciones from './ejercicios.js'
import morgan from 'morgan'
import netflixRoutes from './routes/netflix.routes.js'

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'public')))

app.use(express.json()) //para recibir datos en json en los registros

app.use(express.urlencoded({extended:false}))  // para recibir datos del formulario
app.use('/netflix', netflixRoutes)


app.get('/mostrarpelicula', (req,res)=>{

})



// app.post ('/agregastepelicula', (req,res)=>{
//     console.log(req.body)
//     let {titulo}=req.body
//     res.json({mensaje:'agregaste pelicula'})
// })

// recibir por un parametro
// app.get ('/netflix/:id', (req,res)=>{
//     const {id}=req.params
//     console.log(id)
//     funciones.eliminarPelicula(id)
//     res.json({mensaje:'pelicula obtenida'})
// })

// recibir por un query 
// app.get ('/watch', (req,res)=>{
//     const {v}=req.query
//     res.json({mensaje:'pelicula obtenida'})
// })

app.post('/seregistro',(req,res)=>{
    console.log(req.body)
    res.json({mensaje: 'usuario registrado'})
}) 

app.listen(4500, ()=>{
    console.log ('servidor ejecutandose')
})