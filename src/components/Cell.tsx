import { useState } from 'react';
import './Cell.scss';

interface CellProps { index: number }

const Cell: React.FC<CellProps> = ({ index }) => {
  const [showNumber, setShowNumber] = useState(false);

  const handleClick = () => {
    setShowNumber(true);
  };

  return (
    <div className={`cell ${showNumber ? '_active' : ''}`} onClick={handleClick}>
      {showNumber ? <span>{index}</span> : null}
    </div>
  )
};

export default Cell;