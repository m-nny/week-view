import * as React from 'react';
import { block } from 'bem-cn';

import './CalendarRuler.css';

import { IInterval } from '../../models/Event';

type Props = {
  rulerIntervals: IInterval[],
  cellHeight: number,
};

const b = block('calendar-ruler');

const rulerFormat = 'HH:mm';

const CalendarRuler: React.FC<Props> = ({ rulerIntervals: scaleIntervals, cellHeight }) => {
  const cells = scaleIntervals.map((interval, idx) => (
    <div key={idx} className={b('cell')} style={{ height: cellHeight, lineHeight: `${cellHeight}px` }}>
      {interval.start.format(rulerFormat)}
    </div>
  ));
  return (
    <div className={b()}>
      {cells}
    </div>
  );
};

export default CalendarRuler;