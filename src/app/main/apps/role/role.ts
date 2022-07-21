export class  Role {
   idRole:number;
   Role:string;
   Etat:string;
   commentaire:string;
   code:string;

   constructor( idRole:number,
    Role:string,
    Etat:string,
    code:string,
    commentaire:string,){
        this.idRole=idRole;
        this.Role=Role;
        this.Etat=Etat;
        this.commentaire=commentaire;
        this.code=code;
    }
}