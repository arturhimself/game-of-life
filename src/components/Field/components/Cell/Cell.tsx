import React from 'react';
import { CellItem } from "./CellItems";

interface CellProps { 
  index?: number,
  filled: number,
  width: number,
}

const Cell: React.FC<CellProps> = ({ filled, width }) => {
  return (
    <CellItem width={width} isFilled={filled} />
  )
};

export { Cell };