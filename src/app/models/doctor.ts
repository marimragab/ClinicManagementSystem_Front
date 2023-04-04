export class Doctor {
    constructor(public _id:number,
                 public SSN:number,
                 public firstName:string,
                 public lastName:string,
                 public age:number,
                 public address:object,
                 public specialty:number,
                 public image:string,
                public phone:string,
                public clinic:Array<number>,
                public availability:boolean){}
}
