import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const[images, setImages] = useState([]); //remember, this is the initial state

    useEffect( () => { 
            getGifs( category )
                .then( newImages => setImages( newImages ) ) 
            },[] ); // callback + lista dependencias . Prevent reload of component
  
    return(
        <>
            <h3><strong>{ category }</strong></h3>
            <ol>
                {
                    // images.map( image => (
                    //     <li key={ image.id }>{ image.title }</li>
                    // ))
                    // desestructuramos...
                    images.map( ( { id, title } ) => (
                        <li key={ id }>{ title }</li>
                    ))
                }
            </ol> 
        </>
    )
}