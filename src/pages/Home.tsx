import React, { FC } from 'react';

const Home: FC = () => {
	return (
		<div>
			<h1>Game of life</h1>
			<p>The game of life is a well known cellular automata where only 2 state of cells comes into play, and with just a few rules demonstrates itself that, based on the initial conditions, it generates a lot of mesmerizing patterns throughout the game field.</p>
			<div>
				<a href="/">Start</a>
				<a href="/">About</a>
			</div>	
		</div>
	)
};

export { Home };