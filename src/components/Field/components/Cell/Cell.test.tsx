import React from 'react';
import renderer from 'react-test-renderer';
import { Cell } from './Cell';

describe('Cell', () => {
  const width = 50;

  it('render empty cell', () => {
    expect(
      renderer.create(<Cell filled={0} width={width} />).toJSON()
    ).toMatchSnapshot();
  });

  it('render filled cell', () => {
    expect(
      renderer.create(<Cell filled={1} width={width} />).toJSON()
    ).toMatchSnapshot();
  });
});