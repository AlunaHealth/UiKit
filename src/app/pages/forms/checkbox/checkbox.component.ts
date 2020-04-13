import {Component} from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: `ngx-mat-checkbox`,
  styleUrls: ['./checkbox.component.scss', '../../ui-features/icons/icons-fonts.scss',
    '../../ui-features/colors/setting-colors.scss',
    '../../ui-features/icons/icons.component.scss'],
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
}
