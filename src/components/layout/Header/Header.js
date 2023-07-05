//Styled-Componets
import styled  from "styled-components"

//Arquivos
import banner from "../../../img/postaqui3.png"

export default function Header(){
    return(
        <StyledHeader>
        <div>
            <img src={banner}></img>
            <h1>Teste Calculadora Postaqui</h1>
        </div>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    display: flex;
    margin: 26px auto;
    justify-content: center;
    align-itens: center;
    text-align: center;
    
    img{
        width: 255px;
        height: 74px;
        flex-shrink: 0;
    }
    h1{
        color: var(--title-color);
        font-size: 36px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

`