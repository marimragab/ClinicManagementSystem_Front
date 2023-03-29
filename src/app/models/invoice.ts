export interface IServices {
  doctorId: number;
  price: number;
}

export class Invoice {
  constructor(
    public _id: number,
    public clinicId: number,
    public patientId: number,
    public services: [IServices],
    public date: string
  ) {}
}
