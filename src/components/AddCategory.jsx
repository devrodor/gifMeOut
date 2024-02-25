import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { Button } from "@mui/material";

export const AddCategory = ({ onNewCategory }) => { //remember, aqui recibimos las props y las desestructuramos, una de ellas es la fn setCats

    const [inputValue, setInputValue] = useState('');
    //const onInputChange = (event) => {
    // desestructurando event.target 
    const onInputChange = ({ target }) => { 
        console.log(target.value);
        setInputValue(target.value);

    }

    const onSubmit = (event) => {
        event.preventDefault();  
        if( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim() ); //emitimos el valor al padre a través del parámetro del hijo el hijoparametralpater :)
        setInputValue(''); //clean input after send
    }


    return(
        <Box 
        sx={
            { '& .MuiTextField-root': { m: 0 }, 
            display: 'flex' }
        }
        noValidate
        autoComplete="off"
        >
        <form onSubmit={ (event) => onSubmit(event) }>
            <div>
                <TextField 
                    id="outlined-required"
                    sx={{ flex: 1 }}
                    label="Enter element list"
                    value={ inputValue } 
                    onChange={ onInputChange } //onChange={ (event) =>  onInputChange(event) } 
                />
                
                {/* Listado de Gifs */}
                <Button variant="contained" onClick={ onSubmit }>Agregar</Button>
            </div>
        </form>
        </Box>

    );
}