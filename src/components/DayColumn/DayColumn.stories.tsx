import * as React from 'react';
import { storiesOf } from '@storybook/react';

import DayColumn from './DayColumn';
import { getEveryHourInterval, calculatePosition } from '../../Utils';
import { shortEvent } from '../EventTile/EventTile.stories';

const dayIntervals = getEveryHourInterval();
const events = calculatePosition(32, [shortEvent]);
const props = {
  cellHeight: 32,
  dayIntervals,
  events,
};


storiesOf('DayColumn', module)
  .add('whole day with event', () => <DayColumn {...props} />)
