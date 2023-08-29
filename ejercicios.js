import uniqid from 'uniqid'


let peliculas = [
    {id: uniqid() , titulo: "batman" , rating : 10},
    {id: uniqid(), titulo: "superman" , rating : 11}
]

function agregarPelicula (pelicula){
    pelicula.id=uniqid()
    peliculas.push(pelicula)
}

agregarPelicula({id:3, titulo: "spiderman" , rating: 7})

console.log(peliculas)

function mostrarPelicula(){
    // for (let pelicula of peliculas){
    //     console.log(pelicula.titulo)
    // }
    return peliculas 
}

mostrarPelicula()

function obtenerPeliculas(peliculaid){
    let peli= peliculas.find((pelicula)=>pelicula.id=== Number(peliculaid))
    return peli 
    // console.log(peli)
    // if (peli !== undefined){
    //     return peli
    // } else {
    //     return 'no se encontro la pelicula'
    // }
}

console.log (obtenerPeliculas(4))



function eliminarPelicula(peliculaid){
    peliculas = peliculas.filter((pelicula)=>pelicula.id !== peliculaid)
    
    if (peliculaid > 3){
        return 'no existe esa pelicula'
    } else {
        return peliculas
    }
} 

console.log (eliminarPelicula(1))


function modificarPelicula (peliculaid,nuevapelicula) {
    let index= peliculas.findIndex((pelicula) => pelicula.id === peliculaid)
    if (index !== -1)
        peliculas[index]= nuevapelicula
}


export default {
    agregarPelicula,
    mostrarPelicula,
    obtenerPeliculas,
    eliminarPelicula,
    modificarPelicula
}   