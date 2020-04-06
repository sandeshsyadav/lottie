import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LottieComponent } from './lottie-component/lottie-component.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    LottieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
