export class  Action {
    IdAction:number;
    observation:string;
    Designation:string;
    code:string;
 
    constructor( IdAction:number,
        Designation:string,
        observation:string,
     code:string,
   ){
         this.IdAction=IdAction;
         this.Designation=Designation;
         this.observation=observation;
         this.code=code;
     }
 }