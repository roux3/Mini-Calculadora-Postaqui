//Styled-components
import styled from "styled-components"

//Bibliotecas
import { FormControl, MenuItem, InputLabel, Select} from "@mui/material"


export default function Selecter({text,nome,options,handleOnChange,value}){
    return(
        <FormControl sx={{marginLeft: 2.5, marginRight: 2.5, textAlign:"left",backgroundColor:"white", borderRadius:"5px"}} className="form_control">
            <InputLabel id="demo-simple-select-label">{text}</InputLabel>
            <Select 
                
                labelId="demo-simple-select-label"
                id={nome}
                value={value || ""}
                label={nome}
                onChange={handleOnChange}
                name={nome}
                required
            >
                {options.map(option => (
                    <MenuItem value={option.name} key={option.id}>{option.abbreviation}</MenuItem>
                    
                ))}
                
            </Select>
        </FormControl>
    )
}