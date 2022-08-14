import "./App.css";
import Input from "./components/Input";
import Boton from "./components/Boton";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ffffff',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    }
  },
});

function App() {
  return (
    <div className="App">
      <AppBar position="static" className="appBar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Use function useState
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className="main" sx={{ height: "85vh", width: "100%" }}>
        <Box className="boxLogin">
          <ThemeProvider theme={theme}>
            <Input></Input>
            <Boton></Boton>
          </ThemeProvider>
        </Box>
      </Box>
      <footer className="footer">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} p={1}>
          © 1998-2016 Developer OwlDev. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}

export default App;
