import Cell from './Cell';
import './Field.scss';

interface FieldProps { cells: number[][] }

const Field: React.FC<FieldProps> = ({ cells }) => {
  return (
    <div className="field">
      {cells.flat().map((cell, index) => <Cell key={index} index={index} />)}
    </div>
  );
}

export default Field;