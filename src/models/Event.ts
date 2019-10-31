import moment, { Moment } from 'moment';

export interface IInterval {
  start: Moment
  end: Moment
}

export interface IEvent {
  title: string;
  start: Moment
  duration: number // in hours
  style?: {
    top: number
    height: number
  }
  weekday?: number
}

export function createEvent(title: string, start: string | Moment, duration_min: number): IEvent {
  return {
    title,
    start: moment(start),
    duration: duration_min
  }
}