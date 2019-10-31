import * as React from 'react';
import { block } from 'bem-cn';

import './DayColumn.css';
import DayCell from './DayCell/DayCell';
import { IInterval, IEvent } from '../../models/Event';
import EventTile from '../EventTile/EventTile';
import { calculatePosition } from '../../Utils';

type Props = {
  cellHeight: number,
  dayIntervals: IInterval[],
  events: IEvent[],
};

const b = block('day-column');

const DayColumn: React.FC<Props> = ({ cellHeight, dayIntervals, events }) => {
  const eventsWithPostiions = calculatePosition(cellHeight, events);
  const dayCells = dayIntervals.map((interval, rowPos) => (
    <div
      key={rowPos}
      className={b('cell')}
      style={{ height: cellHeight }}
    >
      <DayCell
      />
    </div>
  ));

  return (
    <div className={b()}>
      {dayCells}
      {eventsWithPostiions.map(e => <EventTile key={e.title} event={e} />)}
    </div>
  );
};

export default DayColumn;