import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { getEveryHourInterval } from '../../Utils';
import DayColumn from './DayColumn';

const props = {
  cellHeight: 32,
};

const dayIntervals = getEveryHourInterval();

storiesOf('DayColumn', module)
  .add('one event', () => <DayColumn {...props} dayIntervals={dayIntervals.slice(0, 1)} />)
  .add('two events', () => <DayColumn {...props} dayIntervals={dayIntervals.slice(0, 2)} />)
  .add('whole day', () => <DayColumn {...props} dayIntervals={dayIntervals} />)
