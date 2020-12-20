import React, { useState } from 'react';
import Field from './components/Field';
import Menu from './components/Menu';
import './App.scss';

const App = () => {
  const [game, setGame] = useState(false);

  const toggleGame = () => {
    setGame(!game);
  };

  const gameOff = () => {
    setGame(false);
  };

  return (
    <div className="app">
      <h1>Game of life</h1>
      <Field game={game} gameOff={gameOff} />
      <Menu handleClick={toggleGame} />
    </div>
  );
}

export default App;
