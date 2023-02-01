import { Injectable } from '@angular/core';

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

    this.tasks.push(new Task(1, 1, "Hudobna teoria", "Vyskusaj precitane z hudobnej teorie", new Date('2024-02-01')));
    this.tasks.push(new Task(2, 1, "Kresba", "Urob si kurz ilustracie", new Date('2024-03-01')));
    this.tasks.push(new Task(1, 2, "Obsidian", "Migruj data do Obsidianu", new Date('2024-01-05')));
    this.tasks.push(new Task(2, 2, "UX", "Citaj knihu o UX", new Date('2024-01-11')));

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
