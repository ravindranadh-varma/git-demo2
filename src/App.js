/* eslint-disable no-unreachable */
import { Container, createTheme } from '@mui/material'
import React from 'react'
import Header from './components/Header';
import "./App.css";
import Frontcard from './components/card';
import { ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Container>
                <Header />
                <Frontcard />
                <Frontcard />
            </Container>
        </ThemeProvider>

    )
}

export default App;
