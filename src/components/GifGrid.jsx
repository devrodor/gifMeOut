import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Grid } from "@mui/material";


export const GifGrid = ({ category }) => {

    //custom hook
    const { images,isLoading } = useFetchGifs(category);
 
    return(
        <>
            <h3><strong>{ category }</strong></h3>
            {
                isLoading ? <h4>Cargando...</h4> : null
            }
             
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