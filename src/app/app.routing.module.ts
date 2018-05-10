import {NgModule} from '@angular/core';
import {Routes} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";
import {RouterModule} from "@angular/router";

const appRoutes: Routes = [
  {path: '', component: LayoutComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
