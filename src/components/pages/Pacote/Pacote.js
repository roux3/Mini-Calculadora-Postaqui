//Styled-components
import styled from "styled-components";

//Componentes
import Input from "../../Form/Input/Input";
import Select from "../../Form/Select/Selecter";

//Bibliotecas
import axios from "axios";
import SubmitButton from "../../Form/SubmitButton/SubmitButton";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import Steps from "../../Steps/Steps";


//Arquivos
import seta from "../../../img/flecha.png"
import SwitchBtn from "../../Form/Switch/Switch";
import TextArea from "../../Form/Input/TextArea";



export default function Pacote({sender, receiver, packet, setPacket}){
    

    const [lenText, setLenText] = useState(0)
    const [validForm, setValidForm] = useState(true)



    useEffect(() => {
        verificaForm();

    },[packet])


    const navigate = useNavigate()

    function verificaForm(){         

        if((packet.weight && packet.weight !== "") 
            && (packet.height && packet.height !== "") 
            && (packet.width && packet.width !== "") 
            && (packet['length'] && packet['length'] !== "") 
            && (packet.information 
                && (packet.information.amount && packet.information.amount !== "")
                && (packet.information.quantity && packet.information.quantity !== "")
                && (packet.information.description && packet.information.description !== "")) ){
            return false
        }
        else{
            return true
        }
    }

    const submit = (e) => {
        e.preventDefault()

        navigate("/final")
        

    
        
    }


    function handleChange(e){
        let value = e.target.value
        setPacket({...packet, [e.target.name]: value})
       
    }


    function handleChangeInfo(e){
        if(e.target.name === "description"){
            
            setLenText(e.target.value.length)
            if(e.target.value.length >= 1000){
                return
            }
        }

        setPacket(packet => ({
            ...packet,
            information:{
                ...packet.information,
                [e.target.name] : e.target.value
            }
        }))
       console.log(e.target.value)
 
    }

    const handleChangeSwtich = (e) =>{
        console.log(packet)
        setPacket({...packet, [e.target.name]: e.target.checked})
    }
    
    
    return(
        <div className="container">
            <div className="steps">
                <Steps dados={sender} title="Origem" backColor="#F2994A" path="/"/>
                <img src={seta} alt="seta-roxa"></img>
                <Steps dados={receiver} title="Destino" backColor="#56CCF2" path="/destino"/>
                {/* <img src={seta} alt="seta-roxa"></img>
                <Steps dados={receiver} title="Destino"/> */}
            </div>


            <div className="containerBox">
                
                <h3 className="title-container">Dados Origem</h3>
                <form onSubmit={submit}> 
                <StyledPacket>
                <div className="form">
                    <div className="dados_embalagem">
                        <Input type="text" text="Peso" nome="weight" required={true} max={10} mask="99999" value={packet.weight} handleOnChange={handleChange} adornment="gramas"/>
                        <Input type="text" text="Altura" nome="height"  value={packet.height} max={10} mask="99999" handleOnChange={handleChange} required={true} adornment="cm"/>
                        <Input type="text" text="Largura" nome="width" value={packet.width} max={10} mask="99999" handleOnChange={handleChange} required={true} adornment="cm"/>
                        <Input type="text" text="Comprimento" nome="length"  value={packet['length']} max={10} mask="99999" handleOnChange={handleChange} required={true}  adornment="cm"/>
                    </div>
                    <div className="dados_embalagem_check">
                       <SwitchBtn text="Logistica Reversa" name="reverse" checked={packet.reverse} handleOnChange={handleChangeSwtich}/>
                       <SwitchBtn text="Aviso de recebimento" name="ar" checked={packet.ar} handleOnChange={handleChangeSwtich}/>
                       <SwitchBtn text="Mãos próprias" name="own_hands" checked={packet.own_hands} handleOnChange={handleChangeSwtich}/>
                    </div>

                    <div className="embalagem_info">
                        <Input type="text" text="Valor da mercadoria" nome="amount" max={10} mask="99999" required={true} adornmentPosition="start" adornment="R$" value={packet.information && packet.information.amount} handleOnChange={handleChangeInfo}/>
                        <Input type="text" text="Quantidade de itens" nome="quantity" required={true} max={10} mask="99999" value={packet.information && packet.information.quantity} handleOnChange={handleChangeInfo}/>
                        <TextArea text="Descrição dos itens" nome="description" max={1000} helpers={`Limite de letras ${lenText}/1000`} value={packet.information && packet.information.description} handleOnChange={handleChangeInfo}/>
                    </div>
                
                </div>   
                </StyledPacket>

                    <SubmitButton validForm={verificaForm()} text={"Avançar"}/>
                </form>
                
            </div>
        </div>
    )
}

const StyledPacket = styled.div`
    .form{
        widht: 100%;
        display: flex;
        justify-content:space-evenly; 
    }
    .embalagem_info{
        widht: 100%;
        display: grid;
        grid-template-columns: 2fr 2fr;
        grid-gap: 19px;
    }




`