import React, { useState } from 'react';
import styled from "@emotion/styled";
import { Field } from './components/';
import { Menu } from './components/';

const AppWrapper = styled.div`
	font-family: Arial, sans-serif;
  font-size: 18px;

  & * {
    box-sizing: border-box;
  }
`;

const App = () => {
  const [game, setGame] = useState(false);

  const toggleGame = () => {
    setGame(!game);
  };

  const gameOff = () => {
    setGame(false);
  };

  return (
    <AppWrapper className="app">
      <h1 onClick={gameOff}>Game of life</h1>
      <Field game={game} gameOff={gameOff} />
      <Menu handleClick={toggleGame} />
    </AppWrapper>
  );
};

export default App;
