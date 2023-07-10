//Bibliotecas
import TextField from '@mui/material/TextField'
import InputMask from 'react-input-mask'
import InputAdornment  from '@mui/material/InputAdornment'


export default function Input({type, text, nome,handleOnChange,value,required,max,mask,error,helper,adornment, adornmentPosition}){
    if(value === undefined){
        value = ""
    }
    let teste = {}
    if((adornment) && adornmentPosition === undefined || (adornmentPosition === "end")){
        teste = {
            endAdornment: <InputAdornment position='start'>{adornment}</InputAdornment>
        }
    }
    else if(adornment && adornmentPosition === "start"){
        teste = {
            startAdornment: <InputAdornment position='start'>{adornment}</InputAdornment>
        }
    }
    






    return(
        <div className="form_control">
        
        <InputMask
            mask={mask}
            value={value}
            onChange={handleOnChange}
            maskChar=""
        >
            {() => 
            <TextField 
            FormHelperTextProps={{
                className: "helpersText"
              }}
            error={error ?error:false}
            helperText={helper===undefined ? "":helper}
            type={type} 
            name={nome} 
            id={nome} 
            label={text} 
            onChange={handleOnChange} 
            value={value} 
            variant='outlined'
            required={required}
            
            //converte para booleano, pois ele inverte o valor depois inverte mais uma vez voltando ao estado original
            InputProps={{
                ...teste,
                maxLength : max,
                        style:{backgroundColor:'white',
                                borderRadius:"5px"}
                        
                            
                            }}

            >
    
            </TextField>
            
            }


        </InputMask>
        
                
                

      
        </div>
           
    )
}