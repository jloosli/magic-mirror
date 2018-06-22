import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {timer} from 'rxjs/internal/observable/timer';
import {takeWhile} from 'rxjs/internal/operators/takeWhile';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  current_weather = {
    temperature: 112,
    icon: '10d'
  };
  active = true;

  constructor(private weatherSvc: WeatherService) {
  }

  ngOnInit() {
    const timerSource = timer(0, 60000)
      .pipe(
        takeWhile(() => this.active),
      );

    timerSource.subscribe(() => {
      this.weatherSvc
        .getCurrentWeather('Ogden')
        .subscribe(res => {
          this.current_weather.temperature = Math.round(res.main.temp);
          this.current_weather.icon = res.weather[0].icon;

          console.log(res);
        });
    });


  }

}
