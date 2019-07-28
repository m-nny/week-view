import * as React from 'react';

import { IEvent, createEvent } from '../../models/Event';
import { storiesOf } from '@storybook/react';
import EventTile from './EventTile';

export const shortEvent = createEvent('Sample event', "2019-07-24 09:00", 1, 'h');
export const longEvent: IEvent = createEvent('Sample event', "2019-07-24 10:00", 4, 'h');

storiesOf('EventTile', module)
  .add('default', () => <EventTile event={shortEvent} />)
  .add('big event', () => <EventTile event={longEvent} />)