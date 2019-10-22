import * as React from 'react';
import { block } from 'bem-cn';
import momemt from 'moment';

import './Calendar.css';

import CalendarHeader from '../CalendarHeader/CalendarHeader';
import CalendarRuler from '../CalendarRuler/CalendarRuler';
import CalendarBody from '../CalendarBody/CalendayBody';
import { getEveryHourInterval } from '../../Utils';

type Props = {
  firstDay: momemt.Moment,
  dayFormat: string,
  columnDimentions: number[],
  cellHeight: number,
  rulerFormat: string,
  cornerTitle: string,
};

const b = block('calendar');

const Calendar: React.FC<Props> = ({ firstDay, dayFormat, columnDimentions, cellHeight, ...props }) => {
  const rulerIntervals = getEveryHourInterval();
  const [scrollPosition, setScrollPosition] = React.useState({top: 0, left: 0});
  return (
    <div className={b()}>
      <div className={b('corner')}>{props.cornerTitle}</div>
      <div className={b('header')} style={{left: -scrollPosition.left}}>
        <CalendarHeader
          firstDay={firstDay}
          dayFormat={dayFormat}
          columnDimentions={columnDimentions}
        />
      </div>
      <div className={b('ruler')} style={{top: -scrollPosition.top}}>
        <CalendarRuler
          rulerIntervals={rulerIntervals}
          rulerFormat={props.rulerFormat}
          cellHeight={cellHeight}
        />
      </div>
      <div className={b('content')} onScroll={({target}) => {setScrollPosition({top: target.scrollTop, left: target.scrollLeft})}}>
        <CalendarBody
          firstDay={firstDay}
          rulerIntervals={rulerIntervals}
          cellHeight={cellHeight}
        />
      </div>
    </div>
  );
};

export default Calendar;