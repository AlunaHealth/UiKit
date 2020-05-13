import {Component} from '@angular/core';
import { NbComponentStatus} from '@nebular/theme';

@Component({
  selector: 'ngx-mat-radio',
  styleUrls: ['./radio.component.scss', '../../ui-features/icons/icons-fonts.scss',
    '../../ui-features/colors/setting-colors.scss',
    '../../ui-features/icons/icons.component.scss'],
  templateUrl: './radio.component.html',
})
export class RadioComponent {
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  favoriteSeason: string = 'Winter';
}
