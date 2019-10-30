import * as React from 'react';

import './EventTile.css';

import { IEvent } from '../../models/Event';
import block from 'bem-cn';

type Props = {
  event: IEvent
};

const b = block('event-tile');

const time_format = "HH:mm";

const EventTile: React.FC<Props> = ({ event: { start, end, title } }) => (
  <div className={b()}>
    <div className={b('time')}>{start.format(time_format)}</div>
    <div className={b('title')}>{title}</div>
  </div>
);

export default EventTile;