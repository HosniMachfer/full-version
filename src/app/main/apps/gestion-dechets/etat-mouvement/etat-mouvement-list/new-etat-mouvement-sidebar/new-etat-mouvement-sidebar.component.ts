import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { Router } from '@angular/router';
import { EtatMouvementListService } from 'app/main/apps/gestion-dechets/etat-mouvement/etat-mouvement-list/etat-mouvement-list.service';
import { EtatMouvementEditService } from 'app/main/apps/gestion-dechets/etat-mouvement/etat-mouvement-edit/etat-mouvement-edit.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-etat-mouvement-sidebar',
  templateUrl: './new-etat-mouvement-sidebar.component.html'
})
export class NewEtatMouvementSidebarComponent implements OnInit {
  public name;
  public code;
  public roles = [];
  public select_roles = [];

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private router: Router, private _etatMouvementEditService: EtatMouvementEditService, private _coreSidebarService: CoreSidebarService,
    private _roleListService: RoleListService ,private _toastrService: ToastrService,
    private _etatMouvementListService: EtatMouvementListService) {}

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
      this.toggleSidebar('new-etat-mouvement-sidebar');
      this._etatMouvementEditService.create(form.value)
    .subscribe(
      response => {
        this._toastrService.success("L'ajout d'un nouveau privilége avec success", "");
        this.router.navigate(['apps/gestion-dechets/etat-mouvement/etat-mouvement-list/etat-mouvement-view/'+response.id]);
      },
      error => {
        this._toastrService.error("Impossible d'ajouter un noueau pribilége", "");
        console.log(error);
      });
    }
  }

  ngOnInit(): void {}
}
