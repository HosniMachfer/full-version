export class User {
    IdUtilisateur ;
    Matricule;
    Nom;
    Prenom;
    etat;
    idRole;
    email;
    password;
    photo
    constructor(
        IdUtilisateur ,
        Matricule,
        Nom,
        Prenom,
        etat,
        idRole,
        email,
        password,
        photo){
            this.IdUtilisateur =IdUtilisateur ;
        this.Matricule=Matricule;
        this.Nom=Nom;
        this.Prenom=Prenom;
        this.etat=etat;
        this.idRole=idRole;
        this.email=email;
        this.password=password;
        this.photo=photo
    }
}