import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NbCardModule,
  NbWindowModule,
} from '@nebular/theme';

// modules
import { ThemeModule } from '../../@theme/theme.module';
import { ModalOverlaysRoutingModule } from './modal-overlays-routing.module';
import { SatPopoverModule } from '@ncstate/sat-popover';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
// components
import { ModalComponent } from './modal/modal.component';
import {ModalOverlaysComponent} from './modal-overlays.component';
import {FormsRoutingModule} from '../forms/forms-routing.module';
import { AlertDialogComponent } from './modal/alert-dialog/alert-dialog.component';

const COMPONENTS = [
  ModalOverlaysComponent,
  ModalComponent,
  AlertDialogComponent,
];

const ENTRY_COMPONENTS = [
];

const MODULES = [
  FormsModule,
  ThemeModule,
  ModalOverlaysRoutingModule,
  NbWindowModule.forChild(),
  NbCardModule,
  FormsRoutingModule,
  SatPopoverModule,
  MatExpansionModule,
  MatDialogModule,
  MatSnackBarModule,
];

const SERVICES = [
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class ModalOverlaysModule {
}
