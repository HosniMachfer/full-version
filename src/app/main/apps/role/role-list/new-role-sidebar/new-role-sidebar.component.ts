import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { RoleEditService } from 'app/main/apps/role/role-edit/role-edit.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';


@Component({
  selector: 'app-new-role-sidebar',
  templateUrl: './new-role-sidebar.component.html'
})
export class NewRoleSidebarComponent implements OnInit {
  public name;
  public code;
  public roles = [];
  public select_roles = [];

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _roleEditService: RoleEditService, private _coreSidebarService: CoreSidebarService,private _roleListService: RoleListService) {}

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
    this.toggleSidebar('new-role-sidebar');
       this._roleEditService.create(form.value)
      .subscribe(
        response => {
         // this.router.navigate(['/roles']);
        },
        error => {
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
