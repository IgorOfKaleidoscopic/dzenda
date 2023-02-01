export interface IProject {
  id: number;
  name: string;
}

export class Project implements IProject {
  id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
