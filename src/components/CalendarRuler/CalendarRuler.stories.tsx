import * as React from 'react';
import { storiesOf } from '@storybook/react';

import CalendarRuler from './CalendarRuler';
import { getEveryHourInterval } from '../../Utils';

const dayIntervals = getEveryHourInterval();

export const rulerFormat = 'HH:mm';
const props = {
  cellHeight: 32,
  rulerFormat,
};

storiesOf('CalendarRuler', module)
  .add('hour', () => <CalendarRuler {...props} rulerIntervals={dayIntervals.slice(0, 1)} />)
  .add('day', () => <CalendarRuler {...props} rulerIntervals={dayIntervals} />)