import * as React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

import Calendar from './Calendar';

const props = {
  firstDay: moment().day('monday'), // First Monday
  cellHeight: 50,
  cornerTitle: 'corner',
};

storiesOf('Calendar', module)
  .add('week', () => <Calendar {...props} />)