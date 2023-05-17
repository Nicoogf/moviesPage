import './App.css';
import PageWrapper from './PageWappers'
import Pelicula from './pelicula'
import Paginacion from './Paginacion'
import { useEffect, useState } from 'react';




function App() {

        const [paginaActual, setPaginaActual] = useState(1);
        const [peliculas, setPeliculas] = useState( [] );

        const TOTAL_POR_PAGINA = 7 

        

        const buscarPeliculas = async() => {

            let url = "https://lucasmoy.dev/data/react/peliculas.json" ;
            let respuesta = await fetch (url , {
                  "method" : "GET",
                  "mode" : "no-cors",
                  "headers" : {
                    "Accept" : "application/json",
                    "Content-Type" : "application/json",
                    "Origin" : "https://lucasmoy.dev"
               }
            })
           
            let json = await respuesta.json();
            setPeliculas(json)
        }

        const cargarPeliculas = () => {
              /* 

              peliculas = peliculas.slice( 
              (paginaActual  - 1) * TOTAL_POR_PAGINA ,
              paginaActual * TOTAL_POR_PAGINA 
              ); 

              */
        }

        const getTotalPaginas = ()=>{
          let cantidadTotalDePeliculas = peliculas.length;
          return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA)
        }

       cargarPeliculas()
     
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
