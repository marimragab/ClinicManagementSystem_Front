export interface Medicine{
    medicineId:number,  quantity:string,  medicineDosage:string
}


export class Prescription {
    constructor(public _id:number, 
        public medicine:Medicine, public notes:string,public date: string, public time: string
        ,public clinic?:number, public doctor?:number, public patient?: number){}
}
