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
      console.log('AgendaComponent:constructor() data available in localStorage');

      dataService.readDataFromLocalStorage();

      this.projects = dataService.getProjects();
      this.tasks = dataService.getTasks();
    }
    else {
      console.log('AgendaComponent:constructor() data unavailable in localStorage');
    }

    console.log('AgendaComponent:constructor() exit');
  }

}
