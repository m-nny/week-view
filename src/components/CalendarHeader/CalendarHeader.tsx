import * as React from 'react';
import { block } from 'bem-cn';
import moment from 'moment';

import './CalendarHeader.css';
import { IInterval } from '../../models/Event';

type Props = {
  firstDay: moment.Moment,
  columnDimentions: number[],
  dayFormat: string,
};

const b = block('calendar-header');

const CalendarHeader: React.FC<Props> = ({ firstDay, columnDimentions, dayFormat }) => {
  if (columnDimentions.length === 0) {
    return null;
  }

  const columns = [];
  let totalWidth = 0;
  for (let i = 0; i < 7; i++) {
    const day = moment(firstDay).add(i, 'd');
    const width = columnDimentions[i];
    totalWidth += width;

    const newCell = (
      <div key={i} className={b('column')} style={{ width }}>
        <span className={b('title')}>{day.format(dayFormat)}</span>
      </div>
    );
    columns.push(newCell);
  };

  return (
    <div className={b()} style={{ width: totalWidth }}>
      {columns}
    </div>
  );
};

type CellProps = {
  date: moment.Moment,
  dayFormat: string,
};

export default CalendarHeader;