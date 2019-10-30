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
  columnNumber: number,
};

const b = block('calendar-body');

const CalendarBody: React.FC<Props> = ({ firstDay, cellHeight, rulerIntervals, columnNumber }) => {
  const columns = [];
  for (let i = 0; i < columnNumber; i++) {
    const day = moment(firstDay).add(i, 'd');
    const intervals = getDayIntervals(day, rulerIntervals);
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
      {columns}
    </div>
  );
};

export default CalendarBody;