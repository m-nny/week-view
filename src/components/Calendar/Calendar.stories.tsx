import * as React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

import Calendar from './Calendar';
import { multipleEvents } from '../EventTile/EventTile.stories';

const props = {
  firstDay: moment().day('monday'), // First Monday
  cellHeight: 50,
  events: multipleEvents,
};

storiesOf('Calendar', module)
  .add('week', () => <Calendar {...props} />)