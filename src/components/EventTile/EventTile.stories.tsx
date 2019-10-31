import * as React from 'react';
import { storiesOf } from '@storybook/react';

import EventTile from './EventTile';

import { createEvent } from '../../models/Event';

export const shortEvent = createEvent('one hour', "2019-07-24 09:00", 1);
export const longEvent = createEvent('four hours', "2019-07-21 10:00", 4);
export const multipleEvents = [shortEvent, longEvent];

storiesOf('EventTile', module)
  .add('default', () => <EventTile event={shortEvent} />)
  .add('big event', () => <EventTile event={longEvent} />)