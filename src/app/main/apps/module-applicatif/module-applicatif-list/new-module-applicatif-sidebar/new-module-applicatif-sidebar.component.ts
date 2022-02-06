import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { Router } from '@angular/router';
import { ModuleApplicatifEditService } from 'app/main/apps/module-applicatif/module-applicatif-edit/module-applicatif-edit.service';
import { ModuleApplicatifListService } from 'app/main/apps/module-applicatif/module-applicatif-list/module-applicatif-list.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-module-applicatif-sidebar',
  templateUrl: './new-module-applicatif-sidebar.component.html'
})
export class NewModuleApplicatifSidebarComponent implements OnInit {
  public name;
  public code;
  public roles = [];
  public select_roles = [];

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private router: Router, private _moduleApplicatifEditService: ModuleApplicatifEditService, private _coreSidebarService: CoreSidebarService,
    private _moduleApplicatifListService: ModuleApplicatifListService, private _roleListService: RoleListService,
    private _toastrService: ToastrService) {}

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
      this.toggleSidebar('new-module-applicatif-sidebar');
      this._moduleApplicatifEditService.create(form.value)
    .subscribe(
      response => {
        this._toastrService.success("L'ajout d'un nouveau module-applicatif avec success", "");
        this.router.navigate(['apps/module-applicatif/module-applicatif-list/module-applicatif-view/'+response.id]);
      },
      error => {
        this._toastrService.error("Impossible d'ajouter un noueau module-applicatif", "");
        console.log(error);
      });
    }
  }

  ngOnInit(): void {
    this._roleListService.getAll()
      .subscribe(
        data => {
          this.roles = data;
        },
        error => {
        console.log(" ici de la merde");
          console.log(error);
        });
  }
}
