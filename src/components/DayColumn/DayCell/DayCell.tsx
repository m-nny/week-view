import * as React from 'react';
import { block } from 'bem-cn';

import './DayCell.css';

type Props = {

};

const b = block('day-cell');

const DayCell: React.FC<Props> = () => {
  return (
    <div className={b()}>
      &nbsp;
    </div>
  );
};

export default DayCell;