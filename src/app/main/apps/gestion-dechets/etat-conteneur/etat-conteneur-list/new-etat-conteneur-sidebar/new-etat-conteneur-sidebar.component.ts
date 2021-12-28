import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { Router } from '@angular/router';
import { EtatConteneurListService } from 'app/main/apps/gestion-dechets/etat-conteneur/etat-conteneur-list/etat-conteneur-list.service';
import { EtatConteneurEditService } from 'app/main/apps/gestion-dechets/etat-conteneur/etat-conteneur-edit/etat-conteneur-edit.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-etat-conteneur-sidebar',
  templateUrl: './new-etat-conteneur-sidebar.component.html'
})
export class NewEtatConteneurSidebarComponent implements OnInit {
  public name;
  public code;
  public roles = [];
  public select_roles = [];

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private router: Router, private _etatConteneurEditService: EtatConteneurEditService, private _coreSidebarService: CoreSidebarService,
    private _roleListService: RoleListService ,private _toastrService: ToastrService,
    private _etatConteneurListService: EtatConteneurListService) {}

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
    if (form.valid) {
      this.toggleSidebar('new-etat-conteneur-sidebar');
      this._etatConteneurEditService.create(form.value)
    .subscribe(
      response => {
        this._toastrService.success("L'ajout d'un nouveau privilége avec success", "");
        this.router.navigate(['apps/gestion-dechets/etat-conteneur/etat-conteneur-list/etat-conteneur-view/'+response.id]);
      },
      error => {
        this._toastrService.error("Impossible d'ajouter un noueau pribilége", "");
        console.log(error);
      });
    }
  }

  ngOnInit(): void {}
}
