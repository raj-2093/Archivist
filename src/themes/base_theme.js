import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    palette:{
        mode: "light"
    }
})

const darkTheme = createTheme({
  palette:{
    mode: "dark"
  }  
})

// const baseTheme = createTheme({
//   palette:{
//     mode: toggleDarkMode? 'dark': 'light'
//   }  
// })

export {
    lightTheme,darkTheme
} 