import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { TscodeComponent } from './tscode/tscode.component';

const routes: Routes = [
  {
    path: 'ts_code',
    component: TscodeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TscodeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
