export class Prescription {
    constructor(
        public _id:number,
        public clinic:number,
        public doctor:number,
        public patient:number,
        public notes:string,
        public date:string,
        public time:string,
        public medicine?:object

    ){}
}
