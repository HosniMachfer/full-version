import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { Router } from '@angular/router';
import { FamilleGmaoListService } from 'app/main/apps/gmao/famille/famille-list/famille-list.service';
import { FamilleGmaoEditService } from 'app/main/apps/gmao/famille/famille-edit/famille-edit.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-famille-sidebar',
  templateUrl: './new-famille-sidebar.component.html'
})
export class NewFamilleGmaoSidebarComponent implements OnInit {
  public name;
  public code;
  public roles = [];
  public select_roles = [];

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private router: Router, private _familleEditService: FamilleGmaoEditService, private _coreSidebarService: CoreSidebarService,
    private _roleListService: RoleListService ,private _toastrService: ToastrService,
    private _familleListService: FamilleGmaoListService) {}

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
      this.toggleSidebar('new-famille-sidebar');
      this._familleEditService.create(form.value)
    .subscribe(
      response => {
        this._toastrService.success("L'ajout d'un nouveau privil�ge avec success", "");
        this.router.navigate(['apps/gmao/famille/famille-list/famille-view/'+response.id]);
      },
      error => {
        this._toastrService.error("Impossible d'ajouter un noueau pribil�ge", "");
        console.log(error);
      });
    }
  }

  ngOnInit(): void {}
}
