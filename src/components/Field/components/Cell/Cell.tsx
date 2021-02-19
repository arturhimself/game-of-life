import React, { FC } from 'react';
import { CellItem } from './CellItems';

interface CellProps {
  index?: number;
  filled: number;
  width: number;
}

const Cell: FC<CellProps> = ({ filled, width }) => {
  return <CellItem width={width} isFilled={filled} />;
};

export { Cell };
