import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Cell from './Cell';

describe('Tests for Cell component', () => {
  it('should render Cell component', () => {
    expect(
      shallow(<Cell index={1} filled={0} />).matchesElement(
        <div className="cell"></div>
      )
    )
  });
});