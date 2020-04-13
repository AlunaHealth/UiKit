import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-icons',
  styleUrls: ['./icons.component.scss', 'icons-fonts.scss', '../colors/setting-colors.scss'],
  templateUrl: './icons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsComponent {

  evaIcons = [];

  constructor(iconsLibrary: NbIconLibraries) {
    this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
      .filter(icon => icon.indexOf('outline') === -1);

    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
  }

  iconsAluna = {
    basics: [
      'alert-circle', 'question-circle', 'clipboard-text', 'chevrons-bottom',
      'chevrons-top', 'auto-edit', 'browser', 'brush', 'calend', 'camera', 'case',
      'check-mark', 'circle-checked', 'circle-minus',
      'circle-more-horizontal', 'circle-plus', 'circle-star', 'circle-x',
      'expand_close', 'eye', 'fit', 'flame', 'gears',
      'max', 'maximize', 'maximize-1', 'min', 'minimize', 'more-horizontal',
      'pencil-create', 'pencil-edit', 'scan', 'scan-doc', 'search',
      'settings', 'share-arrow', 'trash', 'zoom-in', 'zoom-out', 'zoom-out-1', 'movearr'],
    files: [
  'folder-plus', 'folder-minus', 'folder-music', 'folder-opened', 'folder-photo', 'folder-cloud', 'folder-create',
    'folder-delete', 'folder-checked'],
    icons16: [
      'arrow-bottom',
      'arrow-top',
      'chevron-bottom',
      'chevron-left',
      'chevron-right',
      'chevrons-bottom',
      'chevrons-left',
      'chevrons-right',
      'chevron-top1',
      'circle-chevron-bottom1',
      'circle-chevrons-top',
      'external-link1',
      'options1',
      'search',
      'close-2',
      'arrow-bottom1',
      'arrow-bottom-left',
      'arrow-bottom-right',
      'arrow-left',
      'arrow-right',
      'arrow-top1',
      'arrow-top-left',
      'arrow-top-right',
      'bookmark',
      'browser',
      'calendar',
      'call-phone',
      'camera',
      'chevron-bottom1',
      'chevron-top',
      'circle-arrow-bottom',
      'circle-arrow-left',
      'circle-arrow-right',
      'circle-arrow-top',
      'circle-chevron-bottom',
      'circle-chevron-left',
      'circle-chevron-right',
      'circle-chevron-top',
      'circle-minus',
      'circle-plus',
      'circle-x',
      'copy',
      'dropdowm',
      'external-link',
      'eye',
      'file',
      'folder',
      'globe',
      'heart',
      'info',
      'lock',
      'mail',
      'menu',
      'minus',
      'options',
      'paperclip',
      'paperclip-vertical',
      'pencil',
      'pin',
      'plus',
      'printer',
      'question-circle',
      'star',
      'target',
      'time',
      'wi-fi',
      'close',
    ],
    different: [
      'customed',
      'default',
      'unknown',
      'medication',
      'procedure',
      'filter',
      'bell',
      'pin',
    ],
    arrows: [
      'arrow-bottom2',
      'arrow-forward',
      'arrow-top2',
      'chevrons-right1',
      'down',
      'refresh-cw',
      'up',
    ],
  };
}
