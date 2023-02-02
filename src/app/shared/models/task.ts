import { Dayjs } from 'dayjs';

export interface ITask {
  id:number;
  idp: number;
  subject: string;
  detail: string;
  deadline: Dayjs;
}

export class Task implements ITask {
  public id:number;
  public idp: number
  public subject: string;
  public detail: string;
  public deadline: Dayjs;

  constructor(id:number, idp:number, subject: string, detail:string, deadline: Dayjs) {
    this.id = id;
    this.idp = idp;
    this.subject = subject;
    this.detail = detail;
    this.deadline = deadline;
  }
}
