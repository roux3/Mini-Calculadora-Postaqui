import './App.css';

//Bibliotecas
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom"

//Componentes
import Origem from './components/pages/Origem/Origem';

//Arquivos
import banner from './img/postaqui3.png'

function App() {
  return (
    <div className="App">
        <Router>
          <img src={banner}></img>
          <h1>Teste Calculadora Postaqui</h1>
          <Routes>
              <Route exact path='/' element={<Origem/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
