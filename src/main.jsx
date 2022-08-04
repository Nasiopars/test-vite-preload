import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { hydrate, render } from "react-dom";


const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}/>     
      </Routes>
    </BrowserRouter>
  , rootElement);
} else {
  render( 
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}/>     
      </Routes>
    </BrowserRouter>
  , rootElement);
}