import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { PrivilegeEditService } from 'app/main/apps/privilege/privilege-edit/privilege-edit.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';


@Component({
  selector: 'app-new-privilege-sidebar',
  templateUrl: './new-privilege-sidebar.component.html'
})
export class NewPrivilegeSidebarComponent implements OnInit {
  public name;
  public code;
  public roles = [];
  public select_roles = [];

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _privilegeEditService: PrivilegeEditService, private _coreSidebarService: CoreSidebarService,private _roleListService: RoleListService) {}

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
    this.toggleSidebar('new-privilege-sidebar');
       this._privilegeEditService.create(form.value)
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
  //   this._roleListService.getAll()
	//       .subscribe(
	//         data => {
	//           this.roles = data;
	//         },
	//         error => {
	//         console.log(" ici de la merde");
	//           console.log(error);
	//         });
  }
}
