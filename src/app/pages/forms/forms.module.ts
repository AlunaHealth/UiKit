import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { SlideComponent } from './slide/slide.component';
import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    FormsRoutingModule,
    ngFormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    NgSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
  ],
  declarations: [
    FormsComponent,
    ButtonsComponent,
    FormInputsComponent,
    RadioComponent,
    CheckboxComponent,
    SlideComponent,
  ],
})
export class FormsModule { }
