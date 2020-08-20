import { 
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import {
    trigger,
    transition,
    query,
    animateChild,
    animate,
    style
} from '@angular/animations';
import { PwaService } from '@core/services/pwa.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  animations: [
      trigger('fadeOut', [
          transition(':leave', [
              query(':leave', animateChild(), {optional: true}),
              animate(500, style({opacity: 0}))
          ]),
      ]),
  ],
  styleUrls: ['./splash-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplashScreenComponent implements OnInit {
  show = true;

  constructor(
      private pwaService: PwaService,
      private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
      this.pwaService.checkForUpdate()
          .subscribe(result => {
              this.show = result;
              this.cdr.detectChanges();
          });
  }
}