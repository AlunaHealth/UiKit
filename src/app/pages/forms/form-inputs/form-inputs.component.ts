import {Component, NgZone, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import {NgSelectConfig, NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss', '../../ui-features/icons/icons-fonts.scss',
    '../../ui-features/colors/setting-colors.scss',
    '../../ui-features/icons/icons.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {
  public selectedOption: string = 'Volvo';
  constructor(private _ngZone: NgZone, private config: NgSelectConfig) {
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }
  public searchText: string = 'nemnogo teksta';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public clear(event: any) {
    this.searchText = null;
    event.preventDefault();
  }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'},
  ];

  selectedCity: any;
  selectedCityIds: string[];
  selectedCityName = 'Vilnius';
  selectedCityId: number;
  selectedUserIds: number[];

}
