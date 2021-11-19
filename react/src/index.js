import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Technical from "./Pages/Technical.js"
import Fenster from "./Pages/Technical/Fenster.js"
import Wand from "./Pages/Technical/Wand.js"
import Betrieb from "./Pages/Technical/Betrieb.js"
import Balkon from "./Pages/Technical/Balkon.js"
import Dach from "./Pages/Technical/Dach.js"
import Fundament from "./Pages/Technical/Fundament.js"
import Brandschutz from "./Pages/Technical/Brandschutz.js"

import Planning from "./Pages/Planning.js"

import Organisation from "./Pages/Organisation.js"



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/technical" element={<Technical />} />
          <Route path="/technical/fenster" element={<Fenster />} />
          <Route path="/technical/wand" element={<Wand />} />
          <Route path="/technical/betrieb" element={<Betrieb />} />
          <Route path="/technical/balkon" element={<Balkon />} />
          <Route path="/technical/dach" element={<Dach />} />
          <Route path="/technical/fundament" element={<Fundament />} />
          <Route path="/technical/brandschutz" element={<Brandschutz/>} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/organisation" element={<Organisation />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
