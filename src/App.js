import React from 'react';
import './App.css';

import Nav from './components/navigation/Nav';
import Body from './components/body/Items';

import { ReactComponent as UngelUp } from './angle-up-solid.svg';

function App() {
  return (
    <div>
      <Nav />
      <Body />
      <UngelUp className="scroll" />
    </div>
  );
}

export default App;