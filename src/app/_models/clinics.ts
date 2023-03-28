export interface address{
     city:string,  street:string,  building:number
}

export class Clinics {
    constructor(public _id:number, public location:address,public mobilePhone:string,public doctors?:number[],public manager?:number,public availability?:boolean){}
}
