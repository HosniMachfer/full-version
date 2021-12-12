import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { Router } from '@angular/router';
import { PrivilegeListService } from 'app/main/apps/privilege/privilege-list/privilege-list.service';
import { PrivilegeEditService } from 'app/main/apps/privilege/privilege-edit/privilege-edit.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { ToastrService } from 'ngx-toastr';


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
  constructor(private router: Router,private _privilegeEditService: PrivilegeEditService, private _coreSidebarService: CoreSidebarService,
    private _roleListService: RoleListService ,private _toastrService: ToastrService,
    private _privilegeListService: PrivilegeListService) {}

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
          this._toastrService.success("L'ajout d'un nouveau privilége avec success", "");
          this.router.navigate(['apps/privilege/privilege-list/privilege-view/'+response.id]);
        },
        error => {
          this._toastrService.error("Impossible d'ajouter un noueau pribilége", "");
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
