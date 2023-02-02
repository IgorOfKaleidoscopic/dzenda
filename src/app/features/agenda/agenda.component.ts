import { Component } from '@angular/core';

import { DataService } from 'src/app/core/data/data.service';
import { IProject, Project } from 'src/app/shared/models/project';
import { ITask, Task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
  projects:IProject [] = [];
  tasks:ITask [] = [];

  constructor(private dataService:DataService) {
    if (dataService.isDataInLocalStorage()) {
      console.log('AgendaComponent:constructor() data was made persistent once');

      dataService.readDataFromLocalStorage();
    }
    else {
      console.log('AgendaComponent:constructor() data was not made persistent ever or localStorage has been cleared');
    }

    this.projects = dataService.getProjects();
    this.tasks = dataService.getTasks();

    console.log('AgendaComponent:constructor() exit');
  }

}
