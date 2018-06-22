import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  protected openWeatherAPIBase = 'https://api.openweathermap.org/data/2.5/';

  constructor(private http: HttpClient) {
  }

  getCurrentWeather(location: string) {
    return this.http
      .get(this.openWeatherAPIBase + `weather?q=${location}&APPID=${environment.keys.openweather}&units=imperial`);
  }

}
