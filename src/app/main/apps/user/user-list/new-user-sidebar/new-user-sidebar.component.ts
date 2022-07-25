import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { UserEditService } from 'app/main/apps/user/user-edit/user-edit.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { UsineListService } from 'app/main/apps/gestion-dechets/usine/usine-list/usine-list.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-new-user-sidebar',
  templateUrl: './new-user-sidebar.component.html'
})
export class NewUserSidebarComponent implements OnInit {
  public fullName;
  public firstName;
  public email;
  public password;
  public roles;
  public select_roles;
  public tiers;
  public select_tiers;
  public newUserForm : FormGroup;
  public passwordTextType : boolean;
  public submitted = false;

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _userEditService: UserEditService,private _coreSidebarService: CoreSidebarService,
  			  private roleListService: RoleListService,private usineListService: UsineListService, private router: Router) {}

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  get f(){
    return this.newUserForm.controls;
  }

  togglePasswordTextType(){
    this.passwordTextType =! this.passwordTextType;
  }

  /**
   * Submit
   *
   * @param form
   */
  submit(form) {
    this.submitted = true;
    if (form.valid) {
      console.log(form.value)
    this.toggleSidebar('new-user-sidebar');
       this._userEditService.create(form.value)
      .subscribe(
        response => {
         this.router.navigate(['/user/user-list']);
        },
        error => {
          console.log(error);
        });
    }
  }

  ngOnInit(): void {
    // r�cuperer liste des r�les 
  	this.roleListService.getAll()
	      .subscribe(
	        data => {
            this.roles = data;
	        },
	        error => {
	          console.log(error);
	});
	
	// r�cuperer liste des tiers 
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
