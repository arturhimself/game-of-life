import React, { FC, useState, useEffect } from 'react';
import { Engine } from '../engine';
import styled from '@emotion/styled'
import Cell from './Cell';

interface FieldProps {
	game: boolean,
	gameOff: Function,
}

const FieldWrapper = styled.div`
	display: inline-block;
	border-top: 1px solid #c1c1c1;
	border-left: 1px solid #c1c1c1;
	font-size: 0;
`;

export const Field: FC<FieldProps> = ({ game }) => {
	const [cells, setCells] = useState(
		[
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
			[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
			[0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		].flat()
	);
	const rowSize = Math.sqrt(cells.length);

	useEffect(() => {
		const engine = new Engine();

		if (game) {
			engine.updateInterval(setInterval(() => {
				setCells(engine.getNextGen(cells));
			}, 130));
		}

		return () => {
			engine.clearInterval();
		};
	}, [game, cells]);

	return (
		<FieldWrapper>
			{cells.map((filled, index) => (
				<React.Fragment key={index}>
					{index % rowSize === 0 && index > 1 ? <br /> : ''}
					<Cell width={50} filled={filled} />
				</React.Fragment>	
			))}
		</FieldWrapper>
	);
};
