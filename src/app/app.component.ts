import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  applicationName: string;

  constructor() {
    this.applicationName = 'D Ž E N D A';

    console.log("AppComponent.constructor: Finished")
  }
}
