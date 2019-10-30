import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { getEveryHourInterval } from '../../Utils';
import CalendarBody from './CalendayBody';
import moment from 'moment';

const dayIntervals = getEveryHourInterval();

const props = {
  cellHeight: 32,
  rulerIntervals: dayIntervals,
  firstDay: moment().day('monday'),
  columnNumber: 7,
};

storiesOf('CalendarBody', module)
  .add('week', () => <CalendarBody {...props} />)