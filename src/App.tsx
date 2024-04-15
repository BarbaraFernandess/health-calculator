import React from 'react';
import NavBar from './info/navbar';
import Tmb from './info/tmb';
import Imc from './info/imc'
import { NAV_HEIGHT } from './info/navbar/index.styled';

const App: React.FC = () => {
  return (
    <div className="App" style={{paddingTop: NAV_HEIGHT}}>
      <NavBar/>
      <Tmb />
      <Imc />
    </div>
  );
}

export default App;
