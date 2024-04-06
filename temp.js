import { 
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
  import Navbar from "./components/Navbar";
  import Home from "./pages/Home";
  import Explore from "./pages/Explore";
  import Clubs from "./pages/Clubs";
  import About from "./pages/About";
  import { useState } from "react";
  import { ThemeProvider } from "@emotion/react";
  import { lightTheme, darkTheme } from "./themes/base_theme";
  import { Button, CssBaseline } from "@mui/material";
  import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
  
  function App() {
    const [theme, setTheme] = useState({
      current_theme : lightTheme,
      icon : DarkModeRounded
    });
  
    function switchTheme(){
      console.log("before if")
      if(theme == darkTheme){
        setTheme({
          current_theme : lightTheme,
          icon : DarkModeRounded
        })
      } else{
        setTheme({
          current_theme : darkTheme,
          icon : LightModeRounded
        })
      } 
    }
  
    return (
        <Router>
      <ThemeProvider theme={theme.current_theme}>
        <CssBaseline/>
          <Navbar switchTheme={switchTheme}/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Explore" element={<Explore/>}></Route>
            <Route path="/Clubs" element={<Clubs/>}></Route>
            <Route path="/About" element={<About/>}></Route>
          </Routes>
      </ThemeProvider>
        </Router>
    );
  }
  
  export default App;