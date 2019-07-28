import * as React from 'react';
import { block } from 'bem-cn';

import './DayColumn.css';
import DayCell from '../DayCell/DayCell';
import { IEvent } from '../../models/Event';

type Props = {
  cellHeight: number,
  dayIntervals: IEvent[],
};

const b = block('day-column');

const DayColumn: React.FC<Props> = ({cellHeight, dayIntervals}) => {
  const dayCells = dayIntervals.map((interval, rowPos) => (
    <div
      key={rowPos}
      className={b('cell')}
      style={{height: cellHeight}}
    >
      <DayCell
      />
    </div>
  ));

  return (
    <div className={b()}>
      {dayCells}
    </div>
  );
};

export default DayColumn;