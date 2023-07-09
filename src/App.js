//Bibliotecas
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import {useState} from "react"

//Componentes
import Origem from './components/pages/Origem/Origem';
import Header from "./components/layout/Header/Header";
import Destino from "./components/pages/Destino/Destino";
import Pacote from "./components/pages/Pacote/Pacote";


function App() {

  const [sender, setSender] = useState([])
  const [receiver, setReceiver] = useState([])
  const [packet, setPacket] = useState({"reverse": false,
                                          "ar": true,
                                          "own_hands": false})


  return (
    <div className="App">
        <Router>

          <Header/>
          {/* Ideia: Colocar os steps aqui, e ficar verificando se todos campos foram preenchidos */}
         
            <Routes>
                <Route exact path='/' element={<Origem sender={sender} setSender={setSender}/>}/>
                <Route exact path='/destino' element={<Destino sender={sender} receiver={receiver} setReceiver={setReceiver}/>}/>
                <Route exact path='/packet' element={<Pacote sender={sender} receiver={receiver} packet={packet} setPacket={setPacket}/>}/>
                {/* <Route exact path='/final' element={<Final sender={sender} receiver={receiver} packet={packet}/>}/> */}
            </Routes>
          
        </Router>
    </div>
  );
}

export default App;
