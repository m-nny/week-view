import * as React from 'react';
import { block } from 'bem-cn';

import './DayCell.css';

const b = block('day-cell');

const DayCell: React.FC = () => {
  return (
    <div className={b()}>
      &nbsp;
    </div>
  );
};

export default DayCell;