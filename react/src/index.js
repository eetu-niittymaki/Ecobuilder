import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Technical from "./Pages/Technical.js"
import Fenster from "./Pages/Technical/Fenster.js"
import Wand from "./Pages/Technical/Wand.js"
import BetriebTech from "./Pages/Technical/BetriebTech.js"
import Balkon from "./Pages/Technical/Balkon.js"
import Dach from "./Pages/Technical/Dach.js"
import Fundament from "./Pages/Technical/Fundament.js"
import BrandschutzTech from "./Pages/Technical/BrandschutzTech.js"

import Planning from "./Pages/Planning.js"
import Gesamtsystem from "./Pages/Planning/Gesamtsystem.js"
import Grundriss from "./Pages/Planning/Grundriss.js"
import Heizung from "./Pages/Planning/Heizung.js"
import Kühlung from "./Pages/Planning/Kühlung.js"
import Lüftung from "./Pages/Planning/Lüftung.js"
import BetriebPlan from "./Pages/Planning/BetriebPlan.js"
import BrandschutzPlan from "./Pages/Planning/BrandschutzPlan.js"

import Organisational from "./Pages/Organisational.js"
import Ausschbreibung from "./Pages/Organisational/Ausschbreibung.js"
import Marktanalyse from "./Pages/Organisational/Marktanalyse.js"
import Qualitätsmanagement from "./Pages/Organisational/Qualitätsmanagement.js"
import Vorfertigung from "./Pages/Organisational/Vorfertigung.js"
import Zeitmanagement from "./Pages/Organisational/Zeitmanagement.js"



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        // Technical routes
        <Route path="/technical" element={<Technical />} />
          <Route path="/technical/fenster" element={<Fenster />} />
          <Route path="/technical/wand" element={<Wand />} />
          <Route path="/technical/betrieb" element={<BetriebTech />} />
          <Route path="/technical/balkon" element={<Balkon />} />
          <Route path="/technical/dach" element={<Dach />} />
          <Route path="/technical/fundament" element={<Fundament />} />
          <Route path="/technical/brandschutz" element={<BrandschutzTech/>} />

        // Planning Routes
        <Route path="/planning" element={<Planning />} />
          <Route path="/planning/gesamtsystem" element={<Gesamtsystem />} />
          <Route path="/planning/grundriss" element={<Grundriss />} />
          <Route path="/planning/heizung" element={<Heizung />} />
          <Route path="/planning/kuhlung" element={<Kühlung />} />
          <Route path="/planning/luftung" element={<Lüftung />} />
          <Route path="/planning/betrieb" element={<BetriebPlan />} />
          <Route path="/planning/brandschutz" element={<BrandschutzPlan />} />

        // Organisational routes
        <Route path="/organisational" element={<Organisational />} />
          <Route path="/organisational/ausschbreibung" element={<Ausschbreibung />} />
          <Route path="/organisational/marktanalyse" element={<Marktanalyse />} />
          <Route path="/organisational/qualitatsmanagement" element={<Qualitätsmanagement />} />
          <Route path="/organisational/vorfertigung" element={<Vorfertigung />} />
          <Route path="/organisational/zeitmanagement" element={<Zeitmanagement />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
