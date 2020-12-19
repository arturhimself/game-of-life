import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import App from './App';

describe('A test for App component', () => {
	it('should render App Component', () => {
		expect(
      shallow(<App />).matchesElement(
        <div className="app">
          <h1>Title</h1>
        </div>
      )
    ).toBe(true);
	});
});
