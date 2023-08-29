import express from 'express'
import funciones from '../ejercicios.js'
const router = express.Router()

router.get('/mostrar-peliculas',(req,res)=>{
    let arrayPeliculas=funciones.mostrarPelicula()
    res.json(arrayPeliculas)
})

router.post('/agregar-pelicula',(req,res)=>{
        let{id,titulo,rating}=req.body
        funciones.agregarPelicula({id,titulo,rating})
        res.json({mensaje : 'pelicula agregada'})
})

router.delete('/eliminir-pelicula/:id',(req,res)=>{
    const peliculaId = req.params.id
    funciones.eliminarPelicula(peliculaId)
    res.json({mensaje : 'pelicula eliminada'})
})

router.get('/obtener-pelicular/:id',(res,req)=>{
    const peliculaId=req.params.id
    let pelicula=funciones.obtenerPeliculas(peliculaId)
    if(pelicula!==undefined){
        res.json(pelicula)
    }else{
        res.json({mensaje: 'no se encontro la pelicula'})
    }
})

export default router