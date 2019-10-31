import moment from 'moment';
import { IInterval, IEvent, IEventWithPosition } from './models/Event';

export function getEveryHourInterval(day = moment()): IInterval[] {
  return Array(24).fill(null).map((_, hour) => {
    const start = moment(day)
      .hour(hour)
      .startOf('hour')
    return {
      start,
      end: moment(start).add(1, 'h')
    };
  });
};

export function getDayIntervals(day: string | moment.Moment, scaleIntervals: IInterval[]): IInterval[] {
  return scaleIntervals.map(scaleInterval => {
    const start = moment(day)
      .hour(scaleInterval.start.hour())
      .minute(scaleInterval.start.minute())
      .second(0);
    const end = moment(day)
      .hour(scaleInterval.end.hour())
      .minute(scaleInterval.end.minute())
      .second(0);
    return {
      start,
      end
    }
  });
}

export function calculatePosition(cellHeight: number, events: IEvent[]): IEventWithPosition[] {
  return events
    .map((event) => ({
      ...event,
      style: {
        top: event.start.hour() * cellHeight,
        height: event.duration * cellHeight,
      },
    }))
    .sort((a, b) => (a.start.diff(b.start)));
}