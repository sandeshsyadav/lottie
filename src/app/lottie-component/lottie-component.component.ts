import { Component, OnInit, NgZone } from '@angular/core';
import { AnimationOptions, BMRenderFrameErrorEvent } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-lottie-component',
  templateUrl: './lottie-component.component.html',
  styleUrls: ['./lottie-component.component.css']
})
export class LottieComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/data.json',
  };
 
  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '500px',
    margin: '0 auto',
  };

  private animationItem: AnimationItem;
  
  constructor(private ngZone: NgZone) {}
  ngOnInit(): void {

  }
  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
 
  error(error: BMRenderFrameErrorEvent) {
    console.log(`Error: ${error}`);
  }
  stop(): void {
    this.ngZone.runOutsideAngular(() => this.animationItem.stop());
  }
 
  play(): void {
    this.ngZone.runOutsideAngular(() => this.animationItem.play());
  }

}
