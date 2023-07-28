import React from 'react';
import './Style/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmoneyWallet from './Components/EmoneyWallet';
import Register from './Components/Register';
import Login from './Components/Login';
import RightSidebar from './Components/RightSidebar';

function App() {
  return (
    <Router>
      <main className="App">
      <title>Emoney wallet</title>

      <Routes>
      <Route exact path="/" component={EmoneyWallet} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Routes>
      </main>
    </Router>
  );
}

export default App;

