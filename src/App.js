import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import "mdbreact/dist/css/mdb.css";

import Home from './pages/Home';
import Features from './pages/Features';
import Tools from './pages/Tools.js';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
// import firebase from 'firebase/app'
// import 'firebase/auth'
// import config from './config'

function App() {
  const { t } = useTranslation();

  // function handleClick(lang) {
  //   i18next.changeLanguage(lang)
  // }

  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/tools" component={Tools} />
      </BrowserRouter>

      {/* <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
          <button onClick={()=>handleClick('en')} >
            English
          </button>
          <button onClick={()=>handleClick('ko')} >
            Korean
          </button>
          <button onClick={()=>handleClick('chi')} >
            Chinese
         </button>
         <button onClick={()=>handleClick('th')} >
            Thai
         </button>
        </nav> */}
        {/* <header className="App-header">
          
          
        </header> */}

    </div>
  );
}

export default App;
