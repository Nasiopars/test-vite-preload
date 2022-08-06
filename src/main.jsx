import React from 'react'
import App from './App';
import "@babel/polyfill";//preloader - no need
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import {hydrate, render} from "react-dom";


const _Root = document.getElementById("root");
if (_Root.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}/>     
      </Routes>
    </BrowserRouter>
  , _Root);
} else {
  render( 
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}/>     
      </Routes>
    </BrowserRouter>
  , _Root);
}


// const rootElement = document.getElementById("root");
// const renderMethod = (rootElement.hasChildNodes()) ? ReactDOM.render : ReactDOM.hydrate;
// renderMethod(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/*" element={<App />}/>     
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );