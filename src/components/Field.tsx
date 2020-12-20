import React, { FC, useState, useEffect } from 'react';
import Cell from './Cell';
import './Field.scss';

interface FieldProps {
  game: boolean,
  gameOff: Function
}

const Field: FC<FieldProps> = ({ game, gameOff }) => {
	const [cells, setCells] = useState([
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

	const doStep = (cell: number): boolean => {
		const xCurrent = cell % 10;
		const yCurrent = Math.floor(cell / 10);

		const xChanged = xCurrent - 1;
    const yChanged = yCurrent - 1;
    
    if (xChanged < 0 || yChanged < 0) {
      return false;
    }

		setCells(
			cells.map((row, index) => {
				if (yChanged === index) {
					return row.map((cell, index) => (index === xChanged ? 1 : 0));
				} else {
					return row.map(() => 0);
				}
			})
    );
    
    return true;
	};

  const getCurrentPoint = () => cells.flat().indexOf(1);

  useEffect(() => {
    let intervalId: any = 0;

    if (game) {
      intervalId = setInterval(() => {
        const didStep = doStep(getCurrentPoint());
        if (!didStep) clearInterval(intervalId);
      }, 1000);
    }
    
    return () => {
      clearInterval(intervalId);
    }
  });

	return (
		<div className="field">
			{cells.flat().map((filled, index) => (
				<Cell key={index} filled={filled} />
			))}
		</div>
	);
};

export default Field;
