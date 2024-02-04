import { useState } from "react"
import Grid from '@mui/material/Grid';
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
 
export const GifMeOutApp = () => {

    /* 

        REMEMBER: La desestructuración es contínua y muchas veces puede ser confuso saber qué se está extrayendo

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

    // const addCategory = ( ) => {
    //     setCategories([...categories, 'The Smile']); // y para esto se usa el spread, metemos las categorías existentes y añadimos la nueva
    // }

    const [ categories, setCategories ] = useState([ 'Heavy Metal', 'Cats' ]);

    const onAddCategory = ( newCategory ) => { //

        //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

        /* 
        
        El método includes() determina si un array incluye un determinado elemento, devuelve true o false según corresponda.
        
        */

        /* Podríamos validar estrictamente el valor con mayusculas o minusculas u otros caracteres, pero para React, 
            son valores diferentes y por tanto admitidos en este caso. No complication
        */

        if( categories.includes( newCategory ) )return; //full stop, categoría ya existe.

        setCategories([ newCategory, ...categories ]);
    }

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
                {/* Cuando el componente está emitiendo algo, se usa el prefijo on por convención */}
                <AddCategory 
                    /* La prop onNewCategory es una función. 
                    / Esta función es una envoltura alrededor de onAddCategory, que está definida en el componente padre. 
                     Cada vez que onNewCategory es llamada en el hijo, llamará a onAddCategory en el padre con el mismo argumento que recibe. */
                    onNewCategory={ ( cat ) => onAddCategory( cat )  } // la info llega desde el componente hijo y se emite y envia a fn.
                /> 
                
                { 
                    categories.map( ( category ) => (
                        <GifGrid 
                            key={ category } 
                            category={ category } 
                        />
                    )) 
                }
        

            </Grid> 
        </Grid>
        </>
        
    )
}