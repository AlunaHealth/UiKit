import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbCardModule,
  NbRouteTabsetModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { TabsComponent } from './tabs/tabs.component';
import { LayoutComponent } from './layout.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CngTabsModule } from '@codehint-ng/tabs';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbRouteTabsetModule,
    NbCardModule,
    LayoutRoutingModule,
    MatTabsModule,
    CngTabsModule,
  ],
  declarations: [
    TabsComponent,
    LayoutComponent,
  ],
  providers: [
  ],
})
export class LayoutModule { }
