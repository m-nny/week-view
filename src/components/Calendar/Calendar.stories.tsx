import * as React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

import Calendar from './Calendar';
import { getEveryHourInterval } from '../../Utils';
import { rulerFormat } from '../CalendarRuler/CalendarRuler.stories';

const dayIntervals = getEveryHourInterval();

const props = {
  firstDay: moment('2019-01-07'), // First Monday
  columnDimentions: Array(7).fill(100),
  dayFormat: 'dddd',
  cellHeight: 25,
  rulerFormat,
  cornerTitle: 'corner',
};

storiesOf('Calendar', module)
  .add('week', () => <Calendar {...props} />)