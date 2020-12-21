import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import App from './App';
import Field from './components/Field';
import Menu from './components/Menu';

describe('A test for App component', () => {
	it('should render App Component', () => {
    const game: boolean = false;
    const gameOff: Function = jest.fn();
    const toggleGame: Function = jest.fn();

		expect(
      shallow(<App />).containsAllMatchingElements([
        <h1>Game of life</h1>
      ])
    ).toBe(true);
	});
});
