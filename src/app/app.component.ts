import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularMaterialModule } from './shared/modules/angular-material/angular-material.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  applicationName: string;

  constructor(private router: Router) {
    this.applicationName = 'D Ž E N D A';

    console.log("AppComponent.constructor: Finished")
  }
}
