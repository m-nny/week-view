import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { getEveryHourInterval } from '../../Utils';
import CalendarBody from './CalendayBody';

const dayIntervals = getEveryHourInterval();

const props = {
  cellHeight: 32,
  rulerIntervals: dayIntervals,
};

storiesOf('CalendarBody', module)
  .add('week', () => <CalendarBody {...props}/>)