import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';


export const GifItem = ( { title, url } ) => {
 
    return ( 
        <Card sx={{ m: 1}}>
            <CardMedia
            
            sx={{ height: 140 }}
            image={ url }
            title={ title }
            />
            <CardContent>
                <Typography gutterBottom variant="span" component="div">
                { title } 
                </Typography> 
            </CardContent> 
        </Card>


    )

}