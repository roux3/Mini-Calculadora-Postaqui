//Bibliotecas
import TextField from '@mui/material/TextField'
import InputMask from 'react-input-mask'


export default function Input({type, text, nome,handleOnChange,value,required,max,mask,error,helper}){
    if(value === undefined){
        value = ""
    }
    // console.log(`elemento ${text} val ${value}`)
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
            required={required} //converte para booleano, pois ele inverte o valor depois inverte mais uma vez voltando ao estado original
            inputProps={{maxLength : max,
                        style:{backgroundColor:'white',
                                borderRadius:"5px"}}}

            >
    
            </TextField>
            
            }


        </InputMask>
        
                
                

      
        </div>
           
    )
}