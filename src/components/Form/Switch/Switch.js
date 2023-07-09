//Bibliotecas
import { Switch, FormControlLabel} from "@mui/material"
import FormGroup from '@mui/material/FormGroup';

export default function SwitchBtn({text,name,checked, handleOnChange}){
    console.log(checked)
    return(
        <>
            <FormGroup>
                <FormControlLabel control={<Switch name={name} onChange={handleOnChange} checked={checked} />} label={text} />
            </FormGroup>
        </>
    
    )
}