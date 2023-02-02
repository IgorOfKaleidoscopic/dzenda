import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';

import { IProject, Project } from 'src/app/shared/models/project';
import { ITask, Task } from 'src/app/shared/models/task';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  projects:IProject [] = [];
  tasks:ITask [] = [];

  constructor() {
    this.projects.push(new Project(1, "Umenie"));
    this.projects.push(new Project(2, "Software"));

    this.tasks.push(new Task(1, 1, 'Hudobna teoria', 'Vyskusaj precitane z hudobnej teorie', dayjs('2024-03-11', 'YYYY-MM-DD')));
    this.tasks.push(new Task(2, 1, 'Kresba', 'Urob si kurz ilustracie', dayjs('2024-03-01', 'YYYY-MM-DD')));
    this.tasks.push(new Task(1, 2, 'Obsidian', 'Migruj data do Obsidianu', dayjs('2024-05-05', 'YYYY-MM-DD')));
    this.tasks.push(new Task(2, 2, 'UX', 'Citaj knihu o UX', dayjs('2024-01-11', 'YYYY-MM-DD')));

    console.log('AgendaDataService:constructor() exit');
  }

  getProjects(): IProject [] {
    console.log('AgendaDataService:getProjects() exit');

    return this.projects;
  }

  getTasks(): ITask [] {
    console.log('AgendaDataService:getTasks() exit');

    return this.tasks;
  }

  writeDataToLocalStorage():void {
    localStorage.setItem('dzenda-projects', JSON.stringify(this.projects));
    localStorage.setItem('dzenda-tasks', JSON.stringify(this.tasks));

    console.log('AgendaDataService:writeDataToLocalStorage() exit');
  }

  readDataFromLocalStorage():void {
    this.projects = JSON.parse(localStorage.getItem('dzenda-projects') as string);
    this.tasks = JSON.parse(localStorage.getItem('dzenda-tasks') as string);

    console.log('AgendaDataService:readDataFromLocalStorage() exit');
  }

  isDataInLocalStorage():boolean {
    if (typeof localStorage.getItem('dzenda-projects') === 'string' ) return true; else return false;
  }

  clearLocalStorage():void {
    localStorage.clear();

    console.log('AgendaDataService:clearLocalStorage() exit');
  }
}
