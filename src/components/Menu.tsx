import { FC } from 'react';

interface MenuProps { handleClick: Function }

const Menu: FC<MenuProps> = ({ handleClick }) => {
  return (
    <div className="menu">
      <button onClick={() => handleClick()}>Start</button>
    </div>
  )
};

export default Menu;
