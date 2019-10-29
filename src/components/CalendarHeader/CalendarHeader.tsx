import * as React from 'react';
import { block } from 'bem-cn';
import moment from 'moment';

import './CalendarHeader.css';

type Props = {
  firstDay: moment.Moment,
  columnNumber: number,
};

const b = block('calendar-header');

const CalendarHeader: React.FC<Props> = ({ firstDay, columnNumber }) => {
  if (columnNumber === 0) {
    return null;
  }

  const columns = [];
  for (let i = 0; i < columnNumber; i++) {
    const day = moment(firstDay).add(i, 'd');

    const newCell = (
      <div key={i} className={b('column')}>
        {day.format('dddd')}
      </div>
    );
    columns.push(newCell);
  };

  return (
    <div className={b()}>
      {columns}
    </div>
  );
};

export default CalendarHeader;