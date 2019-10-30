import * as React from 'react';
import { storiesOf } from '@storybook/react';

import DayCell from './DayCell';

storiesOf('DayCell', module)
  .addDecorator(story => <div style={{ width: 200, height: 40 }}>{story()}</div>)
  .add('default', () => <DayCell />);
