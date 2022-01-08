import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { Router } from '@angular/router';
import { ConteneurListService } from 'app/main/apps/gestion-dechets/conteneur/conteneur-list/conteneur-list.service';
import { ConteneurEditService } from 'app/main/apps/gestion-dechets/conteneur/conteneur-edit/conteneur-edit.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-conteneur-sidebar',
  templateUrl: './new-conteneur-sidebar.component.html'
})
export class NewConteneurSidebarComponent implements OnInit {
  public name;
  public code;
  public roles = [];
  public select_roles = [];

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private router: Router, private _conteneurEditService: ConteneurEditService, private _coreSidebarService: CoreSidebarService,
    private _roleListService: RoleListService ,private _toastrService: ToastrService,
    private _conteneurListService: ConteneurListService) {}

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

  ngOnInit(): void {}
}
