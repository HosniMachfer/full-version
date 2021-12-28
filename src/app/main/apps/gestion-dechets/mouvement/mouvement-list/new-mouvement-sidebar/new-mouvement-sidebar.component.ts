import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { Router } from '@angular/router';
import { MouvementListService } from 'app/main/apps/gestion-dechets/mouvement/mouvement-list/mouvement-list.service';
import { MouvementEditService } from 'app/main/apps/gestion-dechets/mouvement/mouvement-edit/mouvement-edit.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-mouvement-sidebar',
  templateUrl: './new-mouvement-sidebar.component.html'
})
export class NewMouvementSidebarComponent implements OnInit {
  public name;
  public code;
  public roles = [];
  public select_roles = [];

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private router: Router, private _mouvementEditService: MouvementEditService, private _coreSidebarService: CoreSidebarService,
    private _roleListService: RoleListService ,private _toastrService: ToastrService,
    private _mouvementListService: MouvementListService) {}

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
      this.toggleSidebar('new-mouvement-sidebar');
      this._mouvementEditService.create(form.value)
    .subscribe(
      response => {
        this._toastrService.success("L'ajout d'un nouveau privilége avec success", "");
        this.router.navigate(['apps/gestion-dechets/mouvement/mouvement-list/mouvement-view/'+response.id]);
      },
      error => {
        this._toastrService.error("Impossible d'ajouter un noueau pribilége", "");
        console.log(error);
      });
    }
  }

  ngOnInit(): void {}
}
