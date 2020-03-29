import { Component, NgZone } from '@angular/core';
import { AnimationOptions, BMRenderFrameErrorEvent } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: AnimationOptions = {
    path: '/assets/data.json',
  };
 
  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '500px',
    margin: '0 auto',
  };
  
  private animationItem: AnimationItem;
 
  constructor(private ngZone: NgZone) {}
 
  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
 
  error(error: BMRenderFrameErrorEvent) {
    console.log(`Error: ${JSON.stringify(error)}`);
  }
  stop(): void {
    this.ngZone.runOutsideAngular(() => this.animationItem.stop());
  }
 
  play(): void {
    this.ngZone.runOutsideAngular(() => this.animationItem.play());
  }
}