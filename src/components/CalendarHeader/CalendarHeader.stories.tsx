import * as React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

import CalendarHeader from './CalendarHeader';
import { getEveryHourInterval } from '../../Utils';
import { rulerFormat } from '../CalendarRuler/CalendarRuler.stories';

const dayIntervals = getEveryHourInterval();

const props = {
  firstDay: moment('2019-01-07'), // First Monday
  columnDimentions: Array(7).fill(200),
  dayFormat: 'dddd',
  rulerFormat,
};

storiesOf('CalendarHeader', module)
  .add('week', () => <CalendarHeader {...props} />)