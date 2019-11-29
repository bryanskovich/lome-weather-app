import React from 'react';
import './App.css';

import { WeatherCard } from './components/WeatherCard';
import {BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom'
  
export const App = () => {
  
  return (
    <Router>
      <Switch>
        <Route exact path = '/' component = {WeatherCard} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>


    
  )
}
