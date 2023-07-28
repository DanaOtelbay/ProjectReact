import React, { useEffect, useRef, useState } from 'react';
import '../Style/style.css';
import LeftSidebar from './LeftSidebar';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const EmoneyWallet = () => {
  return (
    <Router>
      <main className="App">
        <title>Emoney wallet</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" />
        <link href="page.css" rel="stylesheet" />

        <div className="container-fluid h-100">
          <div className="row h-100">
            <LeftSidebar />
            <MainContent />
            <RightSidebar />
          </div>
        </div>
      </main>
    </Router>
  );
};

export default EmoneyWallet;
