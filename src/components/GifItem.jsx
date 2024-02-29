import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';


export const GifItem = ( { title, url } ) => {

    console.log( title,url );

    return ( 
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}
            image={ url }
            title={ title }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                { title }
                </Typography> 
            </CardContent> 
        </Card>


    )

}