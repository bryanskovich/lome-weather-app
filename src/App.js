import React from 'react';
import './App.css';

import { WeatherCard } from './components/WeatherCard';
import WeatherState from './context/weatherContext/State'
  
export const App = () => {
  
  return (
    <WeatherState>
      <WeatherCard />  
    </WeatherState>
      
    
  )
}
