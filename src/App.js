import './App.css';
import PageWrapper from './PageWappers'
import Pelicula from './pelicula'
import PeliculaJson from './peliculas.json'
import Paginacion from './Paginacion'
import { useState } from 'react';




function App() {

 const [paginaActual, setPaginaActual] = useState(1);
 const TOTAL_POR_PAGINA = 7 ;

 let peliculas = PeliculaJson ;

 const cargarPeliculas = () => {
    peliculas = peliculas.slice( 
    (paginaActual  - 1) * TOTAL_POR_PAGINA ,
    paginaActual * TOTAL_POR_PAGINA 
    );
 }



  const getTotalPaginas = ()=>{
    let cantidadTotalDePeliculas = PeliculaJson.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA)
  }

  cargarPeliculas();

  return (

    <div>

      <PageWrapper>

        { peliculas.map (pelicula => 
         
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

export default App;
