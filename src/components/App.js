import React from 'react';
import KantoList from '../containers/KantoList';
import Filtered from '../containers/Filtered';
import Navbar from './Navbar';
import './app.css';

const App = () => (
  <div>
    <Navbar />
    <Filtered />
    <KantoList />
  </div>
);

export default App;
