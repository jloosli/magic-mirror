import {Component, OnDestroy, OnInit} from '@angular/core';
import {timer} from 'rxjs/internal/observable/timer';
import {takeWhile} from 'rxjs/internal/operators/takeWhile';
import * as moment from 'moment';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.scss']
})
export class CurrentTimeComponent implements OnInit, OnDestroy {

  currentTime: string;
  currentDate: string;
  active = true;

  constructor() {
  }

  ngOnInit() {
    const timerSource = timer(1000, 1000)
      .pipe(
        takeWhile(() => this.active)
      );
    timerSource.subscribe(() => {
      const timestamp = moment();
      this.currentTime = timestamp.format('h:mm:ss a');
      this.currentDate = timestamp.format('dddd, MMM Do');
    });
  }

  ngOnDestroy() {
    this.active = false;
  }

}
