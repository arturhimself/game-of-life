import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('A test for App component', () => {
	it('should render App Component', () => {
		expect(
      shallow(<App />).containsAllMatchingElements([
        <h1>Game of life</h1>
      ])
    ).toBe(true);
	});
});
