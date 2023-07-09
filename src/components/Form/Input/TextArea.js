//Bibliotecas
import { TextField } from "@mui/material"

export default function TextArea({text, nome, max, helpers,handleOnChange,value}){
    if(value === undefined){
        value = ""
    }
    return(
        <div className="form_control">
        <TextField
            id="outlined-multiline-static"
            label={text}
            multiline
            rows={10}
            name={nome}
            onChange={handleOnChange}
            value={value}
            variant="outlined"
            helperText={helpers}
            InputProps={{
                maxLength : max,
                style:{
                backgroundColor: "white",
                width: "500px"
            }}}
            />
        </div>
    )
}