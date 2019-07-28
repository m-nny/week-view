import moment, {Moment} from 'moment';

export interface IInterval {
  start: Moment;
  end: Moment;
}

export interface IEvent extends IInterval {
  title: string;
}

export function createEvent(title: string, start: string | Moment, duration_min: number, unit: 'h' | 'm' = 'm'): IEvent {
  return {
    title,
    start: moment(start),
    end: moment(start).add(duration_min, unit)
  }
}