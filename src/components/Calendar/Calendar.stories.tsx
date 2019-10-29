import * as React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

import Calendar from './Calendar';
import { rulerFormat } from '../CalendarRuler/CalendarRuler.stories';

const props = {
  firstDay: moment().day('monday'), // First Monday
  columnDimentions: Array(7).fill(100),
  cellHeight: 25,
  rulerFormat,
  cornerTitle: 'corner',
};

storiesOf('Calendar', module)
  .add('week', () => <Calendar {...props} />)