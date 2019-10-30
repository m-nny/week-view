import * as React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

import CalendarHeader from './CalendarHeader';

const props = {
  firstDay: moment().day('monday'), // First Monday
  columnNumber: 7,
};

storiesOf('CalendarHeader', module)
  .add('week', () => <CalendarHeader {...props} />)