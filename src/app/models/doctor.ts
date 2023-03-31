
export interface address{
    city:string,  street:string,  building:number
}

export class Doctor {
    constructor(public _id:number, public SSN:number,public firstName:string,public lastName:string,public age: number,public address:address,public specialty:number,public image: string,public phone: string, public clinic:number[],public availability: true){}
}
