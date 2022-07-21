import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { Router } from '@angular/router';
import { RoleEditService } from 'app/main/apps/role/role-edit/role-edit.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { PrivilegeListService } from 'app/main/apps/privilege/privilege-list/privilege-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-role-sidebar',
  templateUrl: './new-role-sidebar.component.html'
})
export class NewRoleSidebarComponent implements OnInit {
  public Role;
  public code;
  public commentaire;
  public privileges = [];
  public select_privileges = [];

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private router: Router, private _roleEditService: RoleEditService, private _coreSidebarService: CoreSidebarService,
    private _roleListService: RoleListService, private _privilegeListService: PrivilegeListService,
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
      this.toggleSidebar('new-role-sidebar');
      this._roleEditService.create(form.value)
    .subscribe(
      response => {
        this._toastrService.success("L'ajout d'un nouveau role avec success", "");
        this.router.navigate(['apps/role/role-list/role-view/'+response.id]);
      },
      error => {
        this._toastrService.error("Impossible d'ajouter un noueau role", "");
        console.log(error);
      });
    }
  }

  ngOnInit(): void {
    this._privilegeListService.getAll()
      .subscribe(
        data => {
          this.privileges = data;
        
          
        },
        error => {
          console.log(error);
        });
  }
}
