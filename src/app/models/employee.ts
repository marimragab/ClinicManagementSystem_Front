export interface address{
     city:string,  street:string,  building:number
}

export class Employee {
    constructor(public _id:number,public firstName:string, public lastName: string,
        public age: number,public address:address,public phone : string,public SSN?:string,public job?: string,
        public salary ?: number,public image?: string,public availability ?: boolean,public clinic?: number){}
}
