//StyledComponents
import styled from "styled-components";

//Bibliotecas
import axios from "axios";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"



//Arquivos
import caminhao from "../../../img/caminhao.png"

export default function Rastreio({mais_barato, setMais_bartao, setPacket,setReceiver,setSender}){
    
    const [code, setCode] = useState()
    const navigate = useNavigate()
    
    useEffect(() =>{
        let carrier
        if(mais_barato.carrier === "CORREIOS SEDEX" | mais_barato.carrier === "CORREIOS PAC"){
            carrier = "CORREIOS"
        }
        else if(mais_barato.carrier === "JADLOG EXPRESS" | mais_barato.carrier === "JADLOG PACKAGE"){
            carrier = "JADLOG"
        }
        else{
            carrier = "AZUL"
        }
  
        
        axios.post(`https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/posting?carrier=${carrier}`,{
            calculated_id: mais_barato._id
        },
        {headers:{
            'content-type': 'application/json'
        }}).then(response => {
            setCode(response.data.code)
            
        }).catch(error => {
            console.error(error);
          });
        
    },[])


    function novo(){
        setSender([])
        setReceiver([])
        setPacket({"reverse": false,
        "ar": true,
        "own_hands": false})
        setMais_bartao([])
        navigate("/")
    }
    
    return(
        <div className="container">
            <Styledfinal>
            <div className="containerBox">
                
                
                <div>
                    <img src={caminhao} alt="caminhão correios"></img>
                    <p><span>Parabéns o seu frete foi postado com sucesso.</span></p>
                    <p>O seu código de rastreio é</p>
                    <h4>{code}</h4>
                </div>
                <button onClick={novo}>Nova Postagem</button>
                
                

            </div>
            </Styledfinal>
        </div>
    )
}


const Styledfinal = styled.div`
    text-align: center;
    span{
        font-weight: bold; 
    }
    p{
      margin-top:30px;  
    }
    h4{
        font-size: 30px;
    }
    img{
        width: 500px;
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

    .containerBox{
        background-color: white;
    }

`