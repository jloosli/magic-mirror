import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  currentTemp: string;
  currentIcon: string;

  constructor(private weatherSvc: WeatherService) {
  }

  ngOnInit() {
    this.weatherSvc.getCurrentWeather('Ogden').subscribe((res:any) => {
      console.log(res);
      this.currentTemp = res.main.temp;
      this.currentIcon = this.weatherSvc.getIcon(res.weather[0].icon);
      console.log(this.currentIcon);
    });
  }

}
