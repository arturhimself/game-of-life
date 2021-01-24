import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Field, Menu } from '@/components';

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
      <Field game={game} />
      <Menu handleClick={toggleGame} />
    </AppWrapper>
  );
};

export { App };
