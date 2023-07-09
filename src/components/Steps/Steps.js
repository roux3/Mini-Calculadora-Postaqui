//StyledComponents
import styled from "styled-components"


//Bibliotecas
 import {Link} from "react-router-dom"

export default function Steps({dados,title,path,backColor}){

    console.log(dados)
    return(
        <StyledStep backColor={backColor}>
                
                <Link className="step-box" to={path}>
                    
                    <h3>{title}</h3>
                    <div className="dados">
                        <p>{dados.fullname} - {dados.cpf}</p> 
                        <p> {dados.address.cep} - {dados.address.state} - {dados.address.uf}-   {dados.address.city}</p>
                        <p>{dados.address.street}, {dados.address.neighborhood} - {dados.address.number} {dados.address.complement && dados.address.complement}</p>
                        
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

`