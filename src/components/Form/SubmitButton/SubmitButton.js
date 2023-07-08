//StyledComponents
import styled from "styled-components"

export default function SubmitButton({text}){
    return(
        <StyledButton>
        <div>
            <button>{text}</button>
        </div>
        </StyledButton>

    )
}

const StyledButton = styled.div`
    margin-top: 20px;
    button{
        width: 160px;
        height: 33px;
        background-color: var(--button-color);
        border: none;
        border-radius: 15px;
        transition: .3s linear;
        cursor: pointer;
        color: white;
    }
    button:hover{
        background-color: var(--button-color-hover);

    }

`