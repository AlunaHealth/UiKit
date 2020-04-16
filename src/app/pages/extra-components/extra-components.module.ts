import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbCardModule,
  NbTabsetModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ExtraComponentsRoutingModule } from './extra-components-routing.module';
// components
import { ExtraComponentsComponent } from './extra-components.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ProgressBarModule} from 'angular-progress-bar';
const COMPONENTS = [
  ExtraComponentsComponent,
  ProgressBarComponent,
];

const MODULES = [
  NbActionsModule,
  NbCardModule,
  NbTabsetModule,
  ThemeModule,
  ExtraComponentsRoutingModule,
  MatProgressSpinnerModule,
  ProgressBarModule,
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
})
export class ExtraComponentsModule { }
