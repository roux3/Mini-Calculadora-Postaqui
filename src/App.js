//Bibliotecas
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import {useState} from "react"

//Componentes
import Origem from './components/pages/Origem/Origem';
import Header from "./components/layout/Header/Header";



function App() {

  const [sender, setSender] = useState([])
  const [senderAddress, setSenderAddress] = useState([])


  return (
    <div className="App">
        <Router>

          <Header/>
         
            <Routes>
                <Route exact path='/' element={<Origem sender={sender} setSender={setSender} address={senderAddress} setAddress={setSenderAddress}/>}/>
            </Routes>
          
        </Router>
    </div>
  );
}

export default App;
