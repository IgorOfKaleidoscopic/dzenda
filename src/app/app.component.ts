import { Component } from '@angular/core';

import { DataService } from 'src/app/core/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  applicationName: string;

  constructor(private dataService:DataService) {
    this.applicationName = 'D Ž E N D A';

    console.log("AppComponent.constructor: Finished")
  }

  writeDataToLocalStorage() {
    this.dataService.writeDataToLocalStorage();
  }

  clearLocalStorage() {
    this.dataService.clearLocalStorage();
  }
}
