import { BrowserRouter, Route , Routes } from 'react-router-dom';
import './App.css';
import Blog from './views/Blog';
import ListadoPeliculas from './views/ListadoPeliculas';


function App() {  

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<ListadoPeliculas />} />
        <Route path="/Blog" element={<Blog />} />

      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
