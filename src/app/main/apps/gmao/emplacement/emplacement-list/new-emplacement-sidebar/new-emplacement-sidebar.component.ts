import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { Router } from '@angular/router';
import { EmplacementListService } from 'app/main/apps/gmao/emplacement/emplacement-list/emplacement-list.service';
import { EmplacementEditService } from 'app/main/apps/gmao/emplacement/emplacement-edit/emplacement-edit.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-emplacement-sidebar',
  templateUrl: './new-emplacement-sidebar.component.html'
})
export class NewEmplacementSidebarComponent implements OnInit {
  public name;
  public code;
  public roles = [];
  public select_roles = [];

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private router: Router, private _emplacementEditService: EmplacementEditService, private _coreSidebarService: CoreSidebarService,
    private _roleListService: RoleListService ,private _toastrService: ToastrService,
    private _emplacementListService: EmplacementListService) {}

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
      this.toggleSidebar('new-emplacement-sidebar');
      this._emplacementEditService.create(form.value)
    .subscribe(
      response => {
        this._toastrService.success("L'ajout d'un nouveau privil�ge avec success", "");
        this.router.navigate(['apps/gmao/emplacement/emplacement-list/emplacement-view/'+response.id]);
      },
      error => {
        this._toastrService.error("Impossible d'ajouter un noueau pribil�ge", "");
        console.log(error);
      });
    }
  }

  ngOnInit(): void {}
}
