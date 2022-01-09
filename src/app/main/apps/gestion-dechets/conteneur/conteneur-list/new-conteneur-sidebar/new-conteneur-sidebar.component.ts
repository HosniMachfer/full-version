import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { Router } from '@angular/router';
import { ConteneurListService } from 'app/main/apps/gestion-dechets/conteneur/conteneur-list/conteneur-list.service';
import { ConteneurEditService } from 'app/main/apps/gestion-dechets/conteneur/conteneur-edit/conteneur-edit.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { ToastrService } from 'ngx-toastr';

import { EtatConteneurListService } from 'app/main/apps/gestion-dechets/etat-conteneur/etat-conteneur-list/etat-conteneur-list.service';
import { DechetListService } from 'app/main/apps/gestion-dechets/dechet/dechet-list/dechet-list.service';

@Component({
  selector: 'app-new-conteneur-sidebar',
  templateUrl: './new-conteneur-sidebar.component.html'
})
export class NewConteneurSidebarComponent implements OnInit {
  public name;
  public code;
  public etatConteneurs;
  private tempEtatConteneurs = [];
  public dechets = [];
  public select_dechets = [];
  public select_etats = [];

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private router: Router, private _conteneurEditService: ConteneurEditService, 
  	private _coreSidebarService: CoreSidebarService,private _roleListService: RoleListService,
  	private _toastrService: ToastrService,private _conteneurListService: ConteneurListService,
  	private etatConteneurListService: EtatConteneurListService,private dechetListService: DechetListService) {}

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  /**
   * Submit
   *
   * @param form
   */
  submit(form) {
  console.log("*******************************");
  console.log(form.value);
  console.log("*******************************");
    if (form.valid) {
      this.toggleSidebar('new-conteneur-sidebar');
      this._conteneurEditService.create(form.value)
    .subscribe(
      response => {
        this._toastrService.success("L'ajout d'un nouveau privilége avec success", "");
        this.router.navigate(['apps/gestion-dechets/conteneur/conteneur-list/conteneur-view/'+response.id]);
      },
      error => {
        this._toastrService.error("Impossible d'ajouter un noueau pribilége", "");
        console.log(error);
      });
    }
  }
 ngOnInit(): void {
 // récuperer liste des états conteneur 
   this.etatConteneurListService.getAll()
      .subscribe(
        data => {
        this.etatConteneurs = data;
        this.tempEtatConteneurs = this.etatConteneurs;
        console.log(this.etatConteneurs);
        },
        error => {
          console.log(error);
     });
// récuperer liste des déchets 
  	this.dechetListService.getAll()
      .subscribe(
        data => {
        this.dechets = data;
        },
        error => {
          console.log(error);
      });
 }
}
