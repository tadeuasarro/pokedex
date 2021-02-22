import React from 'react';
import KantoList from '../../containers/kantolist/KantoList';
import Filtered from '../../containers/filtered/Filtered';
import Navbar from '../navbar/Navbar';
import './app.css';

const App = () => (
  <div>
    <Navbar />
    <Filtered />
    <KantoList />
  </div>
);

export default App;
