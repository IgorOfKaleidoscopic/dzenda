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

  writeDataToLocalStorage(): void {
    this.dataService.writeDataToLocalStorage();
  }

  resetData(): void {
    this.dataService.resetData();
  }

  clearLocalStorage() {
    this.dataService.clearLocalStorage();
  }
}
