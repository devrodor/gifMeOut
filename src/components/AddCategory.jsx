import { useState } from "react";
import { TextField } from "@mui/material";
import { Grid, Button } from "@mui/material";

export const AddCategory = ({ onNewCategory }) => { //remember, aqui recibimos las props y las desestructuramos, una de ellas es la fn setCats

 
    const [inputValue, setInputValue] = useState('');
    const [timer, setTimer] = useState(null);

    //const onInputChange = (event) => {
    // desestructurando event.target 
    const onInputChange = ({ target }) => {  
        setInputValue(target.value);
        // Cancela el temporizador anterior
        if (timer) {
            clearTimeout(timer);
        }
        // Inicia un nuevo temporizador
        setTimer(setTimeout(() => {
            if(target.value.trim().length > 1) {
                onNewCategory(target.value.trim());
            }
        }, 500)); // Ajusta el tiempo de espera según sea necesario

    }

    const onSubmit = (event) => {
        event.preventDefault();  
        if( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim() ); //emitimos el valor al padre a través del parámetro del hijo el hijoparametralpater :)
        setInputValue(''); //clean input after send
    }


    return(
 
        <form onSubmit={ (event) => onSubmit(event) }>

            <Grid container spacing={2}>
                    <Grid item xs={12}>
                            <TextField 
                                id="outlined-required"
                                fullWidth 
                                label="Escribe y observa la magia"
                                value={ inputValue } 
                                onChange={ onInputChange } //onChange={ (event) =>  onInputChange(event) } 
                            />
                    </Grid> 
            </Grid>
          
        </form>
       

    );
}