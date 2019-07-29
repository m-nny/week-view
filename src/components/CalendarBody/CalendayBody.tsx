import * as React from 'react';
import { block } from 'bem-cn';
import moment from 'moment';

import './CalendarBody.css';
import DayColumn from '../DayColumn/DayColumn';
import { getDayIntervals } from '../../Utils';
import { IInterval } from '../../models/Event';

type Props = {
  firstDay: moment.Moment,
  cellHeight: number,
  rulerIntervals: IInterval[],
};

const b = block('calendar-body');

const CalendarBody: React.FC<Props> = ({ firstDay, cellHeight, rulerIntervals: scaleIntervals }) => {
  const columns = [];
  for (let i = 0; i < 7; i++) {
    const day = moment(firstDay).add(i, 'd');
    const intervals = getDayIntervals(day, scaleIntervals);
    columns.push(
      <DayColumn
        key={i}
        cellHeight={cellHeight}
        dayIntervals={intervals}
      />
    );
  };

  return (
    <div className={b()}>
      <div className={b('row')}>
        {columns}
      </div>
    </div>
  );
};

export default CalendarBody;