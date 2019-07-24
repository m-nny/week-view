import * as React from 'react';
import moment from 'moment';

import { IEvent } from '../models/Event';
import { storiesOf } from '@storybook/react';
import EventTile from './EventTile';

const defaultEvent: IEvent = {
  start: moment().hours(9),
  end: moment().hours(12),
  title: 'testing event',
}

storiesOf('EventTile', module)
  .add('default', () => <EventTile event={defaultEvent}/>);