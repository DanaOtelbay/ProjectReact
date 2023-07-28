import React, { useState } from 'react';
import './Style/style.css';
import EmoneyWallet from './EmoneyWallet';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <main className='App'>
      <title>Emoney wallet</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" />
      <link href="page.css" rel="stylesheet" />
      <div class="container-fluid h-100">
        <div class="row h-100">
        <EmoneyWallet />
        </div>
      </div>
      
    </main>
    
  );
}

export default App;

