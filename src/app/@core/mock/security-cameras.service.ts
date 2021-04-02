import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Camera, SecurityCamerasData } from '../data/security-cameras';
import {LocationStrategy} from '@angular/common';

@Injectable()
export class SecurityCamerasService extends SecurityCamerasData {

  constructor(
    public locationStrategy: LocationStrategy,
  ) {
    super();
  }
  private cameras: Camera[] = [
    {
      title: 'Camera #1',
      source: `${this.locationStrategy.getBaseHref()}assets/images/camera1.jpg`,
    },
    {
      title: 'Camera #2',
      source: `${this.locationStrategy.getBaseHref()}assets/images/camera2.jpg`,
    },
    {
      title: 'Camera #3',
      source: `${this.locationStrategy.getBaseHref()}assets/images/camera3.jpg`,
    },
    {
      title: 'Camera #4',
      source: `${this.locationStrategy.getBaseHref()}assets/images/camera4.jpg`,
    },
  ];

  getCamerasData(): Observable<Camera[]> {
    return observableOf(this.cameras);
  }
}
