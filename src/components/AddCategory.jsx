import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { Button } from "@mui/material";

export const AddCategory = ({ onNewCategory }) => { //remember, aqui recibimos las props y las desestructuramos, una de ellas es la fn setCats

        /* 

        Vamos a establecer una variable de estado 'inputValue' en el componente. 
        Inicialmente, inputValue es undefined porque useState() se ha llamado sin un valor inicial. 
        
        setinputValue es una función que puedes usar para cambiar el valor de inputValue, 
        y cualquier cambio en inputValue hará que el componente se vuelva a renderizar con el nuevo estado.

        DESGLOSE

        useState() es una "variable de estado". A diferencia de las variables normales de JavaScript, 
                cuando usamos una variable de estado, el componente se vuelve a renderizar automáticamente.
        
        useState() devuelve un par de valores, que asignamos a inputValue y setinputValue.

        inputValue es la variable de estado actual. Al inicio, su valor es el que se pasa a useState(), 
        en este caso, como no se ha pasado ningún valor, será undefined.

        setinputValue es una función que permite actualizar inputValue. 
        Cada vez que se llama a setinputValue, el componente se vuelve a renderizar, 
        y inputValue tendrá el nuevo valor que le hayas pasado a setinputValue.

    */

    const [inputValue, setInputValue] = useState('');
    //const onInputChange = (event) => {
        // ojo, aquí estamos desestructurando event.target . Aquí siempre recibimos event como argumento
    const onInputChange = ({ target }) => { 
        console.log(target.value);
        setInputValue(target.value);

    }

    const onSubmit = (event) => {
        event.preventDefault();  
        if( inputValue.trim().length <= 1 ) return;//si no hay nada en el input, full stop 

        onNewCategory( inputValue.trim() ); //emitimos el valor al padre a través del parámetro del hijo el hijoparametralpater :)
        setInputValue(''); //para limpiar el input una vez enviado
    }


    return(
        <Box 
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        >
        <form onSubmit={ (event) => onSubmit(event) }>
            <div>
                <TextField
                    //llamamos a estos atributos 'properties'
                    id="outlined-required"
                    label="Enter element list"
                    value={ inputValue }
                    // ya sabemos que una función a la que pasamos como argumento el mismo argumento a retornar se resume 
                    //onChange={ (event) =>  onInputChange(event) } // cambiamos esto a ...
                    onChange={ onInputChange }
                />
                
                {/* Listado de Gifs */}
                <Button variant="contained" onClick={ onSubmit }>Agregar</Button>
            </div>
        </form>
        </Box>

    );
}