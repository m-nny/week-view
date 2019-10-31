import * as React from 'react';

import { createEvent } from '../../models/Event';
import { storiesOf } from '@storybook/react';
import EventTile from './EventTile';

export const shortEvent = createEvent('one hour', "2019-07-24 09:00", 1, 'h');
export const longEvent = createEvent('four hours', "2019-07-21 10:00", 4, 'h');
export const multipleEvents = [shortEvent, longEvent];

storiesOf('EventTile', module)
  .add('default', () => <EventTile event={shortEvent} />)
  .add('big event', () => <EventTile event={longEvent} />)