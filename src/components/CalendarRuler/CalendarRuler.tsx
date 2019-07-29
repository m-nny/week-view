import * as React from 'react';
import { block } from 'bem-cn';

import './CalendarRuler.css';

import { IInterval } from '../../models/Event';

type Props = {
  rulerIntervals: IInterval[],
  cellHeight: number,
  rulerFormat: string,
};

const b = block('calendar-ruler');

const CalendarRuler: React.FC<Props> = ({ rulerIntervals: scaleIntervals, cellHeight, rulerFormat }) => {
  const cells = scaleIntervals.map((interval, idx) => (
    <div key={idx} className={b('cell')} style={{ height: cellHeight, lineHeight: `${cellHeight}px`}}>
      <span>{interval.start.format(rulerFormat)}</span>
    </div>
  ));
  return (
    <div className={b()}>
      {cells}
    </div>
  );
};

export default CalendarRuler;