import * as React from 'react';
import block from 'bem-cn';

import './EventTile.css';

import { IEventWithPosition } from '../../models/Event';

type Props = {
  event: IEventWithPosition
};

const b = block('event-tile');

const time_format = "HH:mm";

export const EventTile: React.FC<Props> = ({ event: { start, title, style } }) => (
  <div className={b()} style={style}>
    <div className={b('time')}>{start.format(time_format)}</div>
    <div className={b('title')}>{title}</div>
  </div>
);

export default EventTile;