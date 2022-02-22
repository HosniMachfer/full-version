import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { UserEditService } from 'app/main/apps/user/user-edit/user-edit.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { UsineListService } from 'app/main/apps/gestion-dechets/usine/usine-list/usine-list.service';
@Component({
  selector: 'app-new-user-sidebar',
  templateUrl: './new-user-sidebar.component.html'
})
export class NewUserSidebarComponent implements OnInit {
  public fullName;
  public firstName;
  public email;
  public roles;
  public select_roles;
  public tiers;
  public select_tiers;
  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _userEditService: UserEditService,private _coreSidebarService: CoreSidebarService,
  			  private roleListService: RoleListService,private usineListService: UsineListService) {}

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
    this.toggleSidebar('new-user-sidebar');
       this._userEditService.create(form.value)
      .subscribe(
        response => {
         // this.router.navigate(['/users']);
        },
        error => {
          console.log(error);
        });
    }
  }

  ngOnInit(): void {
    // récuperer liste des rôles 
  	this.roleListService.getAll()
	      .subscribe(
	        data => {
            this.roles = data;
	        },
	        error => {
	          console.log(error);
	});
	
	// récuperer liste des tiers 
  	this.usineListService.getAll()
	      .subscribe(
	        data => {
            this.tiers = data;
	        },
	        error => {
	          console.log(error);
	});
  
  
  }
}
