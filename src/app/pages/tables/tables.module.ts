import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    TablesRoutingModule,
    MatTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class TablesModule { }
