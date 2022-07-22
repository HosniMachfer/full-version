export class  Action {
    IdAction:number;
    observation:string;
    action:string;
    code:string;
 
    constructor( IdAction:number,
        action:string,
        observation:string,
     code:string,
   ){
         this.IdAction=IdAction;
         this.action=action;
         this.observation=observation;
         this.code=code;
     }
 }