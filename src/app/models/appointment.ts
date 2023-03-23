export class Appointment {
  constructor(
    public _id: number,
    public clinic: number,
    public doctorName: number,
    public patient: number,
    public date: string,
    public timeFrom: string,
    public timeTo: string
  ) {}
}
