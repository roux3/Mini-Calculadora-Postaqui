//StyledComponents
import styled from "styled-components"

export default function SubmitButton({text,validForm}){

    return(
        <StyledButton vazio={validForm}>
        <div>
            <button disabled={validForm}>{text}</button>
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
        background-color: ${(props) => (props.vazio === true ? "var(--button-disabled)" : "var(--button-color)")};
    }

    button:hover{
        background-color: ${(props) => (props.vazio === true ? "var(--button-disabled)" : "var(--button-color-hover)")};
    }
  



`