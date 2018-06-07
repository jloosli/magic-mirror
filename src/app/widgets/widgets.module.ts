import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CurrentTimeComponent,
    WeatherComponent
  ],
  declarations: [CurrentTimeComponent, WeatherComponent]
})
export class WidgetsModule { }
