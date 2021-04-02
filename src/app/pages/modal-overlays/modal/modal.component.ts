import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import {LocationStrategy} from '@angular/common';
@Component({
  selector: 'ngx-modal',
  styleUrls: ['./modal.component.scss', '../../forms/buttons/buttons.component.scss'],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  constructor(public dialog: MatDialog,
              public snackBar: MatSnackBar,
              public locationStrategy: LocationStrategy) {
  }
  public Decision: boolean = false;
  public contentDecisionBtn: any = 'Hide';
  public haveSuppport: boolean = true;
  public toggleDecision() {
    this.Decision = !this.Decision;
    if (this.Decision) {
      this.contentDecisionBtn = 'Open';
    } else {
      this.contentDecisionBtn = 'HIDE';
    }
  }
  public openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      width: '720px',
      data: {
        title: 'Title',
        buttonText: {
          cancel: 'Done',
        },
      },
    });
  }
}
