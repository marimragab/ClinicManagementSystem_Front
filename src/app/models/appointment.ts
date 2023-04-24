export class Appointment {
  constructor(
    public _id: number,
    public clinic: number,
    public doctor: number,
    public patient: number,
    public date: string,
    public timeFrom: string,
    public timeTo: string,
    public booked: boolean
  ) {}
}
