import '../App.css';
import PageWrapper from './PageWappers'
import Pelicula from './Pelicula'
import Paginacion from './Paginacion'
import React, { useEffect, useState } from 'react';




function ListadoPeliculas() {

      const [paginaActual, setPaginaActual] = useState(1);
      const [peliculas, setPeliculas] = useState([]);
      const TOTAL_POR_PAGINA = 7;

      useEffect( ()=>{
          buscarpeliculas();
      },[peliculas])


      const buscarpeliculas = async() =>{
        let url = "https://lucasmoy.dev/data/react/peliculas.json" ;

        let respuesta = await fetch( url , {
          "method" : 'GET',
          "mode"  : 'no-cors',
          "headers" : {
              "Accept" : 'application/json',
              "Content-Type" : 'application/json',
              "Origin" : 'https://lucasmoy.dev'
          } 
        })

        let  json = await respuesta.json()
        setPeliculas(json);

      }

  

      

      const getTotalPaginas = () =>{
        let cantindadTotalPeliculas = peliculas.length ; 
        return Math.ceil( cantindadTotalPeliculas / TOTAL_POR_PAGINA );
      }
     
    
       let peliculasPorPaginas = peliculas.slice(
          (paginaActual - 1) * TOTAL_POR_PAGINA ,
          paginaActual * TOTAL_POR_PAGINA 
        );

      

  return (

    <div>

      <PageWrapper>

        { peliculasPorPaginas.map (pelicula => 
         
          <Pelicula titulo= {pelicula.titulo} 
          calificacion={pelicula.calificacion} 
          director={pelicula.director} 
          actores={pelicula.actores} 
          fecha={pelicula.fecha}
          duracion={pelicula.duracion}
          img={pelicula.img}
          >

              {pelicula.descripcion}

          
          </Pelicula >
          
        )}

        <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina)=>{
            setPaginaActual(pagina)
        }}/>
  

   

      </PageWrapper>

    </div>
  );
}

export default ListadoPeliculas;
