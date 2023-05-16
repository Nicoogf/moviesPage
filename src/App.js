import './App.css';
import PageWrapper from './PageWappers'
import Pelicula from './pelicula'

function App() {


 let peliculas = [ 

    {
      titulo: "Oblivion (2012)",
      calificacion : "8.1" ,
      director: "Joss Whedon" ,
      actores :"Robert Downey Jr. ,Chris Evans, Chris Hemsworth",
      fecha :"1 May 2015",
      duracion :"2h 21min",
      img :"images/uploads/mv1.jpg",
      descripcion:" Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity..."
  },

  {
        titulo:"into the wild (2014)", 
        calificacion:"7.8" ,
        director:"Anthony Russo" ,
        actores:"Chris Evans,Samuel L. Jackson,Scarlett Johansson" ,
        fecha:"1 May 2015",
        duracion:"1h 47min",
        img:"images/uploads/mv2.jpg",
        descripcion:"As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat..."
  }

]

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

  

   

      </PageWrapper>

    </div>
  );
}

export default App;
