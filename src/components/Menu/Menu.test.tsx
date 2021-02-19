import React from 'react';
import renderer from 'react-test-renderer';
import { Menu } from './';

describe('Menu', () => {
  const onClick = jest.fn();

  it('render menu', () => {
    expect(
      renderer.create(<Menu handleClick={onClick} />).toJSON()
    ).toMatchSnapshot();
  });
});