import * as React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

import CalendarHeader from './CalendayHeader';
import { getEveryHourInterval } from '../../Utils';

const dayIntervals = getEveryHourInterval();

const props = {
  firstDay: moment('2019-01-07'), // First Monday
  columnDimentions: Array(7).fill(200),
  dayFormat: 'dddd',
};

storiesOf('CalendarHeader', module)
  .add('week', () => <CalendarHeader {...props} />)