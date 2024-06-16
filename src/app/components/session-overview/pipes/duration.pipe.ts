import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(timedEvent: {startedAt: string, lastActivityAt: string}): number {
    return Date.parse(timedEvent.lastActivityAt) - Date.parse(timedEvent.startedAt);
  }

}
