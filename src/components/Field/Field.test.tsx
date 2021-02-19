import React from 'react';
import renderer from 'react-test-renderer';
import { Field } from './';

describe('Field', () => {
  it('render field', () => {
    expect(
      renderer.create(<Field game={false} />).toJSON()
    ).toMatchSnapshot();
  });
});