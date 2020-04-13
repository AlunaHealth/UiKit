import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import {SlideComponent} from './slide/slide.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'checkbox',
        component: CheckboxComponent,
      },
      {
        path: 'radio',
        component: RadioComponent,
      },
      {
        path: 'slide',
        component: SlideComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

