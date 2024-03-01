import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { getGifs } from '../helpers/getGifs';
import { Grid } from "@mui/material";


export const GifGrid = ({ category }) => {

    const[ images, setImages ] = useState([]); //remember, this is the initial state

    useEffect( () => { 
            getGifs( category )
                .then( newImages => setImages( newImages ) ) 
            },[] ); // callback + lista dependencias . Prevent reload of component
  
    return(
        <>
            <h3><strong>{ category }</strong></h3>
            <Grid container>
                 
                            {
                                // images.map( image => (
                                //     <li key={ image.id }>{ image.title }</li>
                                // ))
                                // desestructuramos...
                                images.map( ( elemento ) => (
                                    //<li key={ id }>{ title }</li>
                                    <GifItem 
                                        key={ elemento.id }
                                        { ...elemento } //spread de todas las propiedades
                                    />
                                ))
                            }
                     
            </Grid>
           
              
           
        </>
    )
}