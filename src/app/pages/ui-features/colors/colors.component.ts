import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

// @ts-ignore
@Component({
  selector: 'ngx-colors',
  styleUrls: ['./colors.component.scss'],
  templateUrl: './colors.component.html',
})
export class ColorsComponent implements OnDestroy {
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
  colors = {
    'basics': [
      'cha-primary',
      'cha-secondary',
      'gray' ,
      'light-secondary',
      'strange-red',
      'highlight',
      'border-color',
      'selected',
      'the-lightest',
      'disable',
      'hover',
      'pressed',
      'white'],
    'text':
      [ 'link',
        'text',
        'sub-text',
        'low-contrast-text',
        'placeholder',
        'strange-red',
        'links-on-dark'],
    'alert': [
      'negative',
      'warning']};
}
