import * as React from 'react';
import { storiesOf } from '@storybook/react';

import DayColumn from './DayColumn';
import { shortEvent, longEvent } from '../EventTile/EventTile.stories';
import { createEvent } from '../../models/Event';

const props = {
  cellHeight: 32,
};

const day = Array(24).fill(null).map((_, idx) => createEvent('', `2019-01-01 ${idx}:00`, 1, 'h'));

storiesOf('DayColumn', module)
  .add('one event', () => <DayColumn {...props} dayIntervals={[shortEvent]}/>)
  .add('two events', () => <DayColumn {...props} dayIntervals={[shortEvent, longEvent]}/>)
  .add('whole day', () => <DayColumn {...props} dayIntervals={day}/>)
