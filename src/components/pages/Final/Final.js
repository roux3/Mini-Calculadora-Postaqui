//StyledComponents
import styled from "styled-components";

//Bibliotecas
import axios from "axios";
import { useState, useEffect } from "react";
import {useNavigate, Link} from "react-router-dom"
import Steps from "../../Steps/Steps";



//Arquivos
import seta from "../../../img/flecha.png"
import StepPacket from "../../Steps/StepPacket";
import pac from "../../../img/pac.png"
import sedex from "../../../img/sedex.png"
import jadlog from "../../../img/jadlog.png"
import azul from "../../../img/azul.png"
import loader from "../../../img/loading.svg"

export default function Final({sender, receiver, packet, mais_barato, setMais_bartao}){
    
    const [final, setFinal] = useState([])

    const [shipment, setShipment] = useState([])

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    
    useEffect(() =>{
        setLoading(true)
        setFinal({"sender": sender
                ,"receiver": receiver
                ,"package": packet})    
        
        let newCpfsender = sender.cpf.replace(/[.-]/g, '')
        let newCpfreceiver = receiver.cpf.replace(/[.-]/g, '')
        let newCepsender = sender.address.cep.replace(/[.-]/g, '')
        let newCepreceiver = receiver.address.cep.replace(/[.-]/g, '')
        setFinal(final => ({
                    ...final,
                    sender:{
                        ...final.sender,
                        "cpf" : newCpfsender,
                        address:{
                            ...sender.address,
                            "cep" : newCepsender,
                            }
                    }
                }))
        
        setFinal(final => ({
                    ...final,
                    receiver:{
                        ...final.receiver,
                        "cpf" : newCpfreceiver,
                        address:{
                            ...receiver.address,
                            "cep" : newCepreceiver,
                            }
                    }
                }))
        
        
        axios.post('https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/shipping_calculate',final,
        {headers:{
            'content-type': 'application/json'
        }}).then(response => {
            setShipment(response.data.shipment)
            
            setLoading(false)
        }).catch(error => {
            console.error(error);
          });
        
    },[])


    useEffect(() => {
        if(shipment.length > 0){
            var menorId = 0
            var menorPreco = shipment[0].price; // Inicializa com o primeiro preço do array

            for (var i = 1; i < shipment.length; i++) {
            if (shipment[i].price < menorPreco) {
                menorId = i
                menorPreco = shipment[i].price; // Atualiza o menor preço
            }
            }
            setMais_bartao(shipment[menorId])
            
        }
        
    },[shipment])

    const redirect = () => {
        navigate("/rastreio")
    }
    
    
    return(
        <div className="container">
             <div className="steps">
                <Steps dados={sender} title="Origem" backColor="#F2994A" path="/"/>
                <img src={seta} alt="seta-roxa"></img>
                <Steps dados={receiver} title="Destino" backColor="#56CCF2" path="/destino"/>
                <img src={seta} alt="seta-roxa"></img>
                <StepPacket dados={packet} title="Destino" backColor="#27AE60" path="/packet"/>
             
            </div>


            <div className="containerBox">
                
                <h3 className="title-container">valor final do frete</h3>
                <Styledfinal>
                {!loading && <div>
                    <p>O melhor frete para o seu destino é  <img src={(mais_barato.carrier === "CORREIOS PAC")?pac:
                    (mais_barato.carrier === "CORREIOS SEDEX")? sedex: 
                    (mais_barato.carrier === "JADLOG EXPRESS")? jadlog: 
                    (mais_barato.carrier === "JADLOG PACKAGE")? jadlog:
                    azul} alt="logo transportadora"></img>  com o valor R${String(mais_barato.price).replace('.',',')} com entrega no prazo de 5 dias uteis</p>
                    <h4>Sua economia foi de R${String(mais_barato.discount).replace('.',',')}</h4>
                    <button onClick={redirect}>Postar</button>
                </div>
                }
                

                {loading && <img className="loading" src={loader} alt="loading"></img>}
                </Styledfinal>
                

            </div>
        </div>
    )
}


const Styledfinal = styled.div`
    text-align: center;

    h4{
        font-size: 30px;
        margin-top: 80px;
    }
    img{
        width: 100px;
        margin: 0 1em;
    }
    button{
        width: 160px;
        height: 33px;
        background-color: var(--button-color);
        border: none;
        border-radius: 15px;
        transition: .3s linear;
        cursor: pointer;
        color: white;
        background-color: var(--button-color);
        margin-top:40px;
    }

    button:hover{
        background-color: var(--button-color-hover);
    }
    .loading{
        width: 160px;
    }
`