import React from 'react';
import './App.css';
import Dashboards from './page/Dashboard';
import AppBarComponent from './component/AppBarcom';

function App() {
  return (
    <div className="App">
      <AppBarComponent/>
      <Dashboards/>
    </div>
  );
}

export default App;
