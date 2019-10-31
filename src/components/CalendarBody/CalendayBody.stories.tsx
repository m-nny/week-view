import * as React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';

import CalendarBody from './CalendayBody';

import { multipleEvents } from '../EventTile/EventTile.stories';
import { getEveryHourInterval } from '../../Utils';

const dayIntervals = getEveryHourInterval();

const props = {
  cellHeight: 40,
  rulerIntervals: dayIntervals,
  firstDay: moment().day('monday'),
  columnNumber: 7,
  events: multipleEvents
};

storiesOf('CalendarBody', module)
  .add('week', () => <CalendarBody {...props} />)