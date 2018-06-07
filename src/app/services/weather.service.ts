import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  protected openWeatherAPIBase = 'https://api.openweathermap.org/data/2.5/';
  private APIParams = new HttpParams()
    .set('APPID', environment.keys.openweather)
    .set('units', 'imperial');

  constructor(private http: HttpClient) {
  }

  getCurrentWeather(location: string = null) {
    const weatherUrl = this.openWeatherAPIBase + 'weather';
    const params = this.APIParams.set('q', location);
    return this.http.get<any>(weatherUrl, {params: params});
  }

  getIcon(iconSymbol: string): string {
    return `https://openweathermap.org/img/w/${iconSymbol}.png`;
  }
}
