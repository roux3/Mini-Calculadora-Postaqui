//Bibliotecas
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom"

//Componentes
import Origem from './components/pages/Origem/Origem';
import Header from "./components/layout/Header/Header";



function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <Routes>
              <Route exact path='/' element={<Origem/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
