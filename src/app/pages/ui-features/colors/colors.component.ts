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
    'basics': [{
      'colors': 'cha-primary',
      'property': '#323563'
    },
      {
        'colors': 'cha-secondary',
        'property': '#1EAAF1'
      },
      {
        'colors': 'gray',
        'property': '#E1E1E1'
      },
      {
        'colors': 'light-light-secondary',
        'property': '#ECECEC'
      },
      {
        'colors': 'strange-red',
        'property': '#CE2A5C'
      },
      {
        'colors': 'highlight',
        'property': '#EDF8C1'
      },
      {
        'colors': 'border-color',
        'property': '#cccccc'
      },
      {
        'colors': 'selected',
        'property': '#ECF5FF'
      },
      {
        'colors': 'the-lightest',
        'property': '#f9f9f9'
      },
      {
        'colors': 'disable',
        'property': '#f2f2f2'
      },
      {
        'colors': 'hover',
        'property': '#4BBBF4'
      },
      {
        'colors': 'pressed',
        'property': '#1B99D9'
      },
      {
        'colors': 'white',
        'property': '#fff'
      }
    ],
    'text': [{
      'colors': 'link',
      'property': '#323563'
    },
      {
        'colors': 'text',
        'property': '#121212'
      },
      {
        'colors': 'sub-text',
        'property': '#545454'
      },
      {
        'colors': 'low-contrast-text',
        'property': '#757575'
      },
      {
        'colors': 'placeholder',
        'property': '#999999'
      },
      {
        'colors': 'strange-red',
        'property': '#CE2A5C'
      },
      {
        'colors': 'links-on-dark',
        'property': '#809CFF'
      }
    ],
    'alert': [{
      'colors': 'negative',
      'property': '#EB5757'
    },
      {
        'colors': 'warning',
        'property': '#F2C94C'
      }
    ]
  };
}
