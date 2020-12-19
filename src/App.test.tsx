import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import App from './App';
import Field from './components/Field';

describe('A test for App component', () => {
	it('should render App Component', () => {
		expect(
      shallow(<App />).matchesElement(
        <div className="app">
          <h1>Game of life</h1>
          <Field />
        </div>
      )
    ).toBe(true);
	});
});
