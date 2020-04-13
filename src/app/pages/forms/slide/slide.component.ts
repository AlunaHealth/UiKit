import {Component} from '@angular/core';
import { NbComponentStatus} from '@nebular/theme';

@Component({
  selector: 'ngx-mat-slide',
  styleUrls: ['./slide.component.scss', '../../ui-features/icons/icons-fonts.scss',
    '../../ui-features/colors/setting-colors.scss',
    '../../ui-features/icons/icons.component.scss'],
  templateUrl: './slide.component.html',
})
export class SlideComponent {
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
}
