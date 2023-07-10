//StyledComponents
import styled from "styled-components"


//Bibliotecas
 import {Link} from "react-router-dom"

export default function StepPacket({dados,title,path,backColor}){


    return(
        <StyledStep backColor={backColor}>
                
                <Link className="step-box" to={path}>
                    
                    <h3>{title}</h3>
                    <div className="dados">
                        <p><span>AxLxC:</span> {dados.height}x{dados.width}x{dados.width}</p> 
                        <p><span>Logística Reversa:</span> {dados.reverse ? "Sim":"Não"}</p>
                        <p><span>Mãos próprias:</span> {dados.own_hands ? "Sim":"Não"}</p>
                        <p><span>Aviso de recebimento:</span> {dados.ar ? "Sim":"Não"}</p>
                        <p><span>Valor Mercadoria:</span> R${dados.amount}</p>
                        
                    </div>
                </Link>
                

           
        </StyledStep>
    )
}

const StyledStep = styled.div`
    background-color: ${(props) => props.backColor};
    text-align: center;
    border-radius: 30px;
    width: 300px;
    flex-shrink: 0;
    padding: 5px;

    .step-box{
        text-decoration: none;
        color: black;
        
    }

    .dados{
        margin: .5em;
        display:grid;
        grid-row-gap: .5em;
    }

    .dados span{
        text-style: bold;
    }

`