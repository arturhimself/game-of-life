import React from 'react';
import { shallow } from 'enzyme';
import Field from './Field';
import Cell from './Cell';

describe('A test for Field component', () => {
	it('should render Field component with 100 Cell', () => {
    const fieldWithCell = shallow(<Field />);
    expect(fieldWithCell.find('Cell').length).toBe(100);
  });
});