import React, { FC, useState, useEffect } from 'react';
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

export const getAreaCount = (index: number, area: number[]) => {
	const areaRowSize = Math.sqrt(area.length);
	const topPart = area.slice(index - areaRowSize - 1, index - areaRowSize + 2).filter(v => v).length;
	const middlePart = area.slice(index - 1, index + 2).filter(v => v).length - area[index];
	const bottomPart = area.slice(index + areaRowSize - 1, index + areaRowSize + 2).filter(v => v).length;
	return topPart + middlePart + bottomPart;
};

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
		let intervalId: any = 0;

		const lifeProcess = () => {
			setCells(cells.map((cell, index) => 
				[cell, getAreaCount(index, cells)])
					.map((cell) => {
						const [alivePast, count] = cell;
						let isAlive = 0;
						
						if (alivePast && count > 1 && count < 4) {
							isAlive = 1;
						} else if (!alivePast && count === 3) {
							isAlive = 1;
						} else {
							isAlive = 0;
						}
						return isAlive;
					}));
		};

		if (game) {
			intervalId = setInterval(() => {
				lifeProcess();
			}, 130);
		}

		return () => {
			clearInterval(intervalId);
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
