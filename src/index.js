import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from './themes/base_theme';
import { ThemeToggleProvider } from './contexts/ThemeToggleProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeToggleProvider>
  <React.StrictMode>
    <CssBaseline/>
    <App />
  </React.StrictMode>
  </ThemeToggleProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
