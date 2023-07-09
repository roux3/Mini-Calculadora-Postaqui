//Styled-components


//Componentes
import Input from "../../Form/Input/Input";
import Select from "../../Form/Select/Selecter";

//Bibliotecas
import axios from "axios";
import SubmitButton from "../../Form/SubmitButton/SubmitButton";
import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom"

export default function Origem({sender,setSender}){

    const [erroCep, setErroCep] = useState([])
    const [erroCpf, setErroCpf] = useState([])

    const [validForm, setValidForm] = useState(true)
    

    useEffect(() => {
        API_cep(sender?.address?.cep)
    },[])

    useEffect(() => {
        console.log(sender)
        verificaForm();

    },[sender])


    function verificaForm(){         

        if((sender.fullname && sender.fullname !== "") 
        && (sender.cpf && sender.cpf !== "" && sender.cpf.length === 14) 
        &&  (sender.phone && sender.phone !== "") 
        && (sender.email && sender.email !== "")
        &&(sender.address && (sender.address.cep && sender.address.cep !== "")
        && (sender.address.state && sender.address.state !== "")
        && (sender.address.uf && sender.address.uf !== "")
        && (sender.address.city && sender.address.city !== "")
        && (sender.address.neighborhood && sender.address.neighborhood !== "")
        && (sender.address.street && sender.address.street !== "")
        && (sender.address.number && sender.address.number !== ""))
         && validForm === false){
            
            return false
        }
        else{
            console.log("negativo")
            return true
        }
    }

    const navigate = useNavigate()

   function API_cep(cep){
        //cep = cep.replace(/\D/d, '')
        if(cep && cep.length === 10){
            setErroCep([]);
            axios.get(`https://viacep.com.br/ws/${cep.replace(/[.-]/g, '')}/json/`)
            .then((res) => {
                setValidForm(false)
                const data = res.data
                if(data.cep){
                    //Atualizo os campos automaticamente caso o cep seja válido e tenha um retorno diferente de undefined
                    setSender(sender => ({
                        ...sender,
                        address:{
                            ...sender.address,
                            "cep": cep,
                            "state": options.find(item => item.abbreviation === data.uf).name,
                            "uf": data.uf,
                            "city": data.localidade,
                            "neighborhood": data.bairro,
                            "street": data.logradouro
                        }
                    }))

                   
                }
                else{
                    setValidForm(true)
                }
                
                
            })
            
            .catch((err) => {
                console.log(err)
            })
        }
        else{
            ClearAddr(cep)
        }

        
   }

   function ClearAddr(cep){
        //Está função serve para limpar os campos automaticamentes caso cep tenha menos de 8 dígitos
        setSender(sender => ({
            ...sender,
            address:{
                ...sender.address,
                "cep": cep,
                "state": "",
                "uf": "",
                "city": "",
                "neighborhood": "",
                "street": ""
            }
        }))
   }


    const options = [{
        "id": 1,
        "abbreviation": "AC",
        "name": "Acre"
    },
    {
        "id": 2,
        "abbreviation": "AL",
        "name": "Alagoas"
    },
    {
        "id": 3,
        "abbreviation": "AP",
        "name": "Amapá"
    },
    {
        "id": 4,
        "abbreviation": "AM",
        "name": "Amazonas"
    },
    {
        "id": 5,
        "abbreviation": "BA",
        "name": "Bahia"
    },
    {
        "id": 6,
        "abbreviation": "CE",
        "name": "Ceará"
    },
    {
        "id": 7,
        "abbreviation": "DF",
        "name": "Distrito Federal"
    },
    {
        "id": 8,
        "abbreviation": "ES",
        "name": "Espírito Santo"
    },
    {
        "id": 9,
        "abbreviation": "GO",
        "name": "Goiás"
    },
    {
        "id": 10,
        "abbreviation": "MA",
        "name": "Maranhão"
    },
    {
        "id": 11,
        "abbreviation": "MT",
        "name": "Mato Grosso"
    },
    {
        "id": 12,
        "abbreviation": "MS",
        "name": "Mato Grosso do Sul"
    },
    {
        "id": 13,
        "abbreviation": "MG",
        "name": "Minas Gerais"
    },
    {
        "id": 14,
        "abbreviation": "PA",
        "name": "Pará"
    },
    {
        "id": 15,
        "abbreviation": "PB",
        "name": "Paraíba"
    },
    {
        "id": 16,
        "abbreviation": "PR",
        "name": "Paraná"
    },
    {
        "id": 17,
        "abbreviation": "PE",
        "name": "Pernambuco"
    },
    {
        "id": 18,
        "abbreviation": "PI",
        "name": "Piauí"
    },
    {
        "id": 19,
        "abbreviation": "RJ",
        "name": "Rio de Janeiro"
    },
    {
        "id": 20,
        "abbreviation": "RN",
        "name": "Rio Grande do Norte"
    },
    {
        "id": 21,
        "abbreviation": "RS",
        "name": "Rio Grande do Sul"
    },
    {
        "id": 22,
        "abbreviation": "RO",
        "name": "Rondônia"
    },
    {
        "id": 23,
        "abbreviation": "RR",
        "name": "Roraima"
    },
    {
        "id": 24,
        "abbreviation": "SC",
        "name": "Santa Catarina"
    },
    {
        "id": 25,
        "abbreviation": "SP",
        "name": "São Paulo"
    },
    {
        "id": 26,
        "abbreviation": "SE",
        "name": "Sergipe"
    },
    {
        "id": 27,
        "abbreviation": "TO",
        "name": "Tocantins"
    }

    ]

    

    const submit = (e) => {
        e.preventDefault()

        if(sender.address.cep.length === 10){
            setErroCep([]);
        }
        else{
            setErroCep({cep:"CEP invalido"})
            
        }

        if(sender.cpf.length === 14){
            setErroCpf([]);

           console.log(sender)
            
        }
        else{
            setErroCpf({cpf:"CPF inválido"})
        }



        if(sender.address.cep.length === 10 && sender.cpf.length === 14){
            navigate("/destino")
        }
        
    }

    function handleChange(e){
        let value = e.target.value
        if(e.target.name === "cpf"){
            //value = value.replace(/[.-]/g, '') //replace pode ser feito no final quando for enviar de fato a requisição
            if(value.length === 11){
                setErroCpf([]);
            } //salva em sender sem os pontos e traços
        }
        setSender({...sender, [e.target.name]: value})
       
    }

    
    function handleChangeAdrress(e){
        setSender(sender => ({
            ...sender,
            address:{
                ...sender.address,
                [e.target.name] : e.target.value
            }
        }))
        if(e.target.name === "cep"){
             API_cep(e.target.value)
        }
        
       
    }



    function handleSelect(e){
        const selectedValue = e.target.value
        let uf = options.find(item => item.name === selectedValue).abbreviation 

        setSender(sender => ({
            ...sender,
            address:{
                ...sender.address,
                state : selectedValue,
                uf: uf
            }
        }))
        
    }

    return(
        <div className="container">
        <div className="containerBox">
            <h3 className="title-container">Dados Destino</h3>
            <form onSubmit={submit} className="form"> 
                <div className="dados_pessoais">
                    <Input type="text" text="Nome Completo" nome="fullname" mask="" max={100} required={true} handleOnChange={handleChange} value={sender.fullname}/>
                    <Input type="text" text="CPF" nome="cpf" error={erroCpf.cpf ? true:false} helper={erroCpf.cpf && erroCpf.cpf} required={true} mask="999.999.999-99" max={14} handleOnChange={handleChange} value={sender.cpf}/>
                    <Input type="tel" text="Telefone" nome="phone" required={true} mask="(99) 99999-9999" max={15} handleOnChange={handleChange} value={sender.phone}/>
                    <Input type="email" text="E-mail" nome="email" required={true} mask="" max={70} handleOnChange={handleChange} value={sender.email}/>
                </div>
                <div className="dados_endereco">
                    <Input type="text" text="CEP" nome="cep" error={erroCep.cep ? true:false} helper={erroCep.cep && erroCep.cep} required={true} mask="99.999-999" max={10} handleOnChange={handleChangeAdrress} value={sender.address && sender.address.cep}/>
                    <Select text="UF" nome="uf" options={options} handleOnChange={handleSelect} value={sender.address ? sender.address.state: ""}/>
                    <Input type="text" text="Cidade" nome="city" mask="" max={50} required={true} handleOnChange={handleChangeAdrress} value={sender.address && sender.address.city}/>
                    <Input type="text" text="Bairro" nome="neighborhood" mask="" max={70} required={true} handleOnChange={handleChangeAdrress} value={sender.address && sender.address.neighborhood}/>
                    <Input type="text" text="Rua" nome="street" required={true} mask="" max={70} handleOnChange={handleChangeAdrress} value={sender.address && sender.address.street}/>
                    <Input type="text" text="Número" nome="number" mask="99999" max={5}  required={true} handleOnChange={handleChangeAdrress} value={sender.address && sender.address.number}/>
                    <Input type="text" text="Complemento" nome="complement" mask="" max={100} required={false} handleOnChange={handleChangeAdrress} value={sender.address && sender.address.complement}/>
                </div>
                <SubmitButton validForm={verificaForm()} text={"Avançar"}/>
               
            </form>
        </div>
        </div>
        
    )
}

// const StyledOrigem = styled.div`
//         display: flex;
//         width: 80%;
//         height: 367px;
//         margin: 70px auto;

//         flex-shrink: 0;
        
//         border-radius: 20px;
//         background: var(--container-back);
// `