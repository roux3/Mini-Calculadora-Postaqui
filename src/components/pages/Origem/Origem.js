//Styled-components
import styled from "styled-components";

//Componentes
import Input from "../../Form/Input/Input";
import Select from "../../Form/Select/Selecter";

//Bibliotecas
import axios from "axios";

export default function Origem({sender,setSender,address, setAddress}){

   function API_cep(cep){
        if(cep.length == 8){
            cep = cep.replace(/\D/d, '')
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => {
                const data = res.data
                if(data.cep){
                    setSender({...sender, address:{
                        "cep": data.cep.replace(/\D/d, ''),
                        "state": options.find(item => item.abbreviation === data.uf).name,
                        "uf": data.uf,
                        "city": data.localidade,
                        "neighborhood": data.bairro,
                        "street": data.logradouro
                    }})
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


        setSender({...sender, address:{
            "cep": cep,
            "state": "",
            "uf": "",
            "city": "",
            "neighborhood": "",
            "street": ""
        }})
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


    function handleChange(e){
        setSender({...sender, [e.target.name]: e.target.value})
        console.log(sender)
       
    }

    
    function handleChangeAdrress(e){

        console.log(sender)
        setSender(sender => ({
            ...sender,
            address:{
                ...sender.address,
                [e.target.name] : e.target.value
            }
        }))
        //setSender({...sender, address :{ [e.target.name] : e.target.value} })
        console.log(e.target.value)
        if(e.target.name == "cep"){
             API_cep(e.target.value)
        }
        
       
    
        
       
    }

 

    function handleSelect(e){
        const selectedValue = e.target.value
        let uf = options.find(item => item.name === selectedValue).abbreviation 
        // let state = options.find(item => item.name === selectedValue).name 

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
            <h3 className="title-container">Dados Origem</h3>
            <form  className="form"> 
                <div className="dados_pessoais">
                    <Input type="text" text="Nome Completo" nome="fullname" required="true" handleOnChange={handleChange} value={sender.fullname}/>
                    <Input type="text" text="CPF" nome="cpf" required="true" handleOnChange={handleChange} value={sender.cpf}/>
                    <Input type="tel" text="Telefone" nome="phone" required="true" handleOnChange={handleChange} value={sender.phone}/>
                    <Input type="email" text="E-mail" nome="email" required="true" handleOnChange={handleChange} value={sender.email}/>
                </div>
                <div className="dados_endereco">
                    <Input type="text" text="CEP" nome="cep" required="true" handleOnChange={handleChangeAdrress} value={sender.address && sender.address.cep}/>
                    <Select text="UF" nome="uf" options={options} handleOnChange={handleSelect} value={sender.address ? sender.address.state: ""}/>
                    <Input type="text" text="Cidade" nome="city" required="true" handleOnChange={handleChangeAdrress} value={sender.address && sender.address.city}/>
                    <Input type="text" text="Bairro" nome="neighborhood" required="true" handleOnChange={handleChangeAdrress} value={sender.address && sender.address.neighborhood}/>
                    <Input type="text" text="Rua" nome="street" required="true" handleOnChange={handleChangeAdrress} value={sender.address && sender.address.street}/>
                    <Input type="number" text="Número" nome="number" required="true" handleOnChange={handleChangeAdrress} value={sender.address && sender.address.number}/>
                    <Input type="text" text="Complemento" nome="complement" required="false" handleOnChange={handleChangeAdrress} value={sender.address && sender.address.complement}/>
                </div>
               
            </form>
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