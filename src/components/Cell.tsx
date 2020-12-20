import { useState } from 'react';
import './Cell.scss';

interface CellProps { 
  index?: number,
  filled: number,
}

const Cell: React.FC<CellProps> = ({ filled }) => {
  return (
    <div className={`cell ${filled ? '_active' : ''}`} />
  )
};

export default Cell;