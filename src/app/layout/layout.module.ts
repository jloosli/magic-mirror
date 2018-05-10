import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {WidgetsModule} from "../widgets/widgets.module";

@NgModule({
  imports: [
    CommonModule,
    WidgetsModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
