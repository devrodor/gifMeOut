export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=rq8or109l7gOfyUPEvcdfDH16QfnLnKJ&q=${ category }&limit=20`;
    const resp = await fetch( url );
    const { data } = await resp.json();
 
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        username: img.username,
        url: img.images.downsized_medium.url
    }));
 
    return gifs;

}