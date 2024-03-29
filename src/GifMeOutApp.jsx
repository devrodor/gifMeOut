import ReactLogo from './assets/images/react.svg';
import { useState } from "react"
import { AddCategory, GifGrid } from './components';
import { Container, Grid, AppBar, Toolbar, Box, Typography } from '@mui/material';
 

//Styles
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './assets/css/style.css'

//themes
import { createTheme, ThemeProvider } from '@mui/material/styles';

const basicTheme = createTheme({
    palette: {
      primary: {
        main: '#454545',
        textBackground: '#fcfbe0'
      },
      // Puedes definir otros colores aquí
    },
  });

// app
export const GifMeOutApp = () => {


    const [ categories, setCategories ] = useState([ '']);

    const onAddCategory = ( newCategory ) => { //
 
        if( categories.includes( newCategory ) )return; //full stop, categoría ya existe.
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
        <ThemeProvider theme={basicTheme}>

        {/* Menu superior */}
        <AppBar position="static" elevation={0}>
            <Toolbar>
            <Box display="flex" alignItems="center" flexGrow={1}>
                <img src={ReactLogo} alt="React Logo" style={{ marginRight: 20, height: 40 }} />
                <Typography variant="h6" noWrap component="div">
                GifMeOut
                </Typography>
            </Box>
            </Toolbar>
        </AppBar>

        {/* Contenedor principal */}
        <Container maxWidth="lg" sx={{ mt: 2, mb: 2, p:1 }}>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/* Titulo */}
                        <h1>GifMeOutApp</h1>
                    </Grid>
                    <Grid item xs={12} sx={{ m: 0, p:0 }}>  
                        {/* Input + Functionality */} 
                        <AddCategory 
                            onNewCategory={ ( el ) => onAddCategory( el )  } 
                        /> 
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 0, p:0 }}>
                        { 
                            categories.map( ( cat ) => (
                                <GifGrid 
                                    key={ cat } 
                                    category={ cat } 
                                />
                            )) 
                        }
                

                </Grid> 

        </Container>
        </ThemeProvider>
        </>
        
    )
}