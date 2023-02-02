import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';

import { IProject, Project } from 'src/app/shared/models/project';
import { ITask, Task } from 'src/app/shared/models/task';

@Injectable({
  providedIn: 'root'
})
export class AgendaDataService {
  projects:IProject [] = [];
  tasks:ITask [] = [];

  constructor() {
    this.projects.push(new Project(1, "Umenie"));
    this.projects.push(new Project(2, "Software"));

    this.tasks.push(new Task(1, 1, 'Hudobna teoria', 'Vyskusaj precitane z hudobnej teorie', dayjs('2024-03-11', 'YYYY-MM-DD')));
    this.tasks.push(new Task(2, 1, 'Kresba', 'Urob si kurz ilustracie', dayjs('2024-03-01', 'YYYY-MM-DD')));
    this.tasks.push(new Task(1, 2, 'Obsidian', 'Migruj data do Obsidianu', dayjs('2024-05-05', 'YYYY-MM-DD')));
    this.tasks.push(new Task(2, 2, 'UX', 'Citaj knihu o UX', dayjs('2024-01-11', 'YYYY-MM-DD')));

    console.log("AgendaDataService:constructor() 999");
  }

  getProjects(): IProject [] {
    console.log("AgendaDataService:getProjects() 999");

    return this.projects;
  }

  getTasks(): ITask [] {
    console.log("AgendaDataService:getTasks() 999");

    return this.tasks;
  }

}
