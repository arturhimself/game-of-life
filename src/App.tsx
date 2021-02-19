import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { Field, Menu } from '@/components';

const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
  font-size: 18px;

  & * {
    box-sizing: border-box;
  }
`;

const App: FC = () => {
  const [game, setGame] = useState(false);

  const toggleGame = () => {
    setGame(!game);
  };

  return (
    <AppWrapper className="app">
      <h1>Game of life</h1>
      <Field game={game} />
      <Menu handleClick={toggleGame} />
    </AppWrapper>
  );
};

export { App };
