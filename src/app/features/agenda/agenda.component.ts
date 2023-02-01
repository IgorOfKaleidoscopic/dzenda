import { Component } from '@angular/core';

import { AgendaDataService } from 'src/app/core/agenda-data/agenda-data.service';
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

  constructor(private ad:AgendaDataService) {
    this.projects = ad.getProjects();
    this.tasks = ad.getTasks();

    console.log("AgendaComponent:constructor() 999");
  }

}
