import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  
  Routes,
  Route,
} from "react-router-dom";
import Counseling from './Pages/Counseling/Counseling.jsx';
import Join from './Pages/Join/Join.jsx';
import Aboutpage from './Pages/Aboutpage/Aboutpage';
import Servicepage from './Pages/Servicepage/Servicepage';
import Workpage from './Pages/Workpage/Workpage';
import Contactpage from './Pages/Contactpage/Contactpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />}></Route>
      <Route path = "/Pages/Counseling/Counseling.jsx" element = {<Counseling/>}></Route>
      <Route path = "/Pages/Aboutpage/Aboutpage.jsx" element = {<Aboutpage/>}></Route>
      <Route path = "/Pages/Servicepage/Servicepage.jsx" element = {<Servicepage/>}></Route>
      <Route path = "/Pages/Workpage/Workpage.jsx" element = {<Workpage/>}></Route>
      <Route path = "/Pages/Contactpage/Contactpage.jsx" element = {<Contactpage/>}></Route>
      <Route path = "/Pages/Join/Join.jsx" element = {<Join/>}></Route>

    </Routes>
  </BrowserRouter>
);

