import { useState } from "react"
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import { AddCategory } from "./components/AddCategory";
 
export const GifMeOutApp = () => {

    /* 

        Vamos a establecer una variable de estado 'categories' en el componente. 
        Inicialmente, categories es undefined porque useState() se ha llamado sin un valor inicial. 
        
        setCategories es una función que puedes usar para cambiar el valor de categories, 
        y cualquier cambio en categories hará que el componente se vuelva a renderizar con el nuevo estado.

        DESGLOSE

        useState() es una "variable de estado". A diferencia de las variables normales de JavaScript, 
                cuando usamos una variable de estado, el componente se vuelve a renderizar automáticamente.
        
        useState() devuelve un par de valores, que asignamos a categories y setCategories.

        categories es la variable de estado actual. Al inicio, su valor es el que se pasa a useState(), 
        en este caso, como no se ha pasado ningún valor, será undefined.

        setCategories es una función que permite actualizar categories. 
        Cada vez que se llama a setCategories, el componente se vuelve a renderizar, 
        y categories tendrá el nuevo valor que le hayas pasado a setCategories.

    */

    const addCategory = ( ) => {
        setCategories([...categories, 'The Smile']); // y para esto se usa el spread, metemos las categorías existentes y añadimos la nueva
    }

    const [ categories, setCategories ] = useState([ 'Heavy Metal', 'Cats' ]);

    return (
        <>
        <Grid container  
            direction="column"
            >
            <Grid item m={12}> 

                {/* Titulo */}
                <h1>GifMeOutApp</h1>

                {/* Input */}
                {/* El nombre del metodo setCategories es random, simplemente para ordenar */}
                <AddCategory setCategories={ setCategories } />
    
                {/* Listado de Gifs */}
                <Button variant="contained" onClick={ addCategory }>Agregar</Button>
                <ol>
                    { categories.map( category => {
                        return <li key={ category }>{ category }</li>
                    }) }
                </ol>

            </Grid> 
        </Grid>
        </>
        
    )
}