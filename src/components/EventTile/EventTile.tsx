import * as React from 'react';

import './EventTile.css';

import { IEvent } from '../../models/Event';

type Props = {
  event: IEvent
};

const time_format = "HH:mm";

const EventTile: React.FC<Props> = ({event: {start, end, title}}) => (
  <div className="event-tile">
    {start.format(time_format)} - {end.format(time_format)} {title}
  </div>
);

export default EventTile;