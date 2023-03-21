export interface IAddress {
  city: string;
  street: string;
  building: number;
}

export class Patient {
  constructor(
    public _id: number,
    public SSN: number,
    public firstName: string,
    public lastName: string,
    public age: number,
    public address: IAddress,
    public phone: string,
    public email: string,
    public password: string,
    public availability?: boolean
  ) {}
}
