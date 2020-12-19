import React from 'react';
import { shallow } from 'enzyme';
import Field from './Field';

it('Should render Field component', () => {
  expect(shallow(<Field />).matchesElement(<div className="field"></div>)).toBe(true);
});