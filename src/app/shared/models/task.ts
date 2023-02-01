export interface ITask {
  id:number;
  idp: number;
  subject: string;
  detail: string;
  deadline: Date;
}

export class Task implements ITask {
  public id:number;
  public idp: number
  public subject: string;
  public detail: string;
  public deadline: Date;

  constructor(id:number, idp:number, subject: string, detail:string, deadline: Date) {
    this.id = id;
    this.idp = idp;
    this.subject = subject;
    this.detail = detail;
    this.deadline = deadline;
  }
}
