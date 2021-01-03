import { useState } from 'react';
import './Cell.scss';

interface CellProps { 
  index?: number,
  filled: number,
  styles?: Object,
}

const Cell: React.FC<CellProps> = ({ filled, styles }) => {
  return (
    <div style={styles} className={`cell ${filled ? '_active' : ''}`} />
  )
};

export default Cell;