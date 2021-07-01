import React from 'react';
import { Route } from 'react-router-dom';
import './styles/App.scss';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Reservation from './components/pages/Reservation';

const App: React.FC = () => {
  return (
    <div className="app">
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/reservation" component={Reservation} />
    </div>
  );
}

export default App;
