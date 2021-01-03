import React, { FC, useState, useEffect } from 'react';
import Cell from './Cell';
import './Field.scss';

interface FieldProps {
	game: boolean;
	gameOff: Function;
}

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
	let intervalId: any = 0;

	useEffect(() => {
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
	});

	const cellStyle = {
		width: '50px',
	};

	return (
		<div className="field">
			{cells.map((filled, index) => (
				<React.Fragment key={index}>
					{index % rowSize === 0 && index > 1 ? <br /> : ''}
					<Cell styles={cellStyle} filled={filled} />
				</React.Fragment>	
			))}
		</div>
	);
};

