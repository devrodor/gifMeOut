import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  
    const[ images, setImages ]      = useState([]); //remember, this is the initial state
    const[ isLoading, setIsLoading] = useState( true );

    const getImages = async()=> {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => { 
            getImages();
            }, [] ); // callback + lista dependencias . Prevent reload of component

    return  {
        images: images,
        isLoading: isLoading
    }

}
