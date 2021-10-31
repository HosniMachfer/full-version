import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { UserEditService } from 'app/main/apps/user/user-edit/user-edit.service';

@Component({
  selector: 'app-new-user-sidebar',
  templateUrl: './new-user-sidebar.component.html'
})
export class NewUserSidebarComponent implements OnInit {
  public fullName;
  public firstName;
  public email;

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _userEditService: UserEditService,private _coreSidebarService: CoreSidebarService) {}

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
  console.log("Ajouter nouveau utilisateur 222222222222");
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  /**
   * Submit
   *
   * @param form
   */
  submit(form) {
    if (form.valid) {
    console.log("Ajouter nouveau utilisateur");
    this.toggleSidebar('new-user-sidebar');
    
    console.log(form.value);
      
       this._userEditService.create(form.value)
      .subscribe(
        response => {
         // this.router.navigate(['/users']);
         console.log(" OKKKKKKKKKKKKKKKKKKKKKKKKKK");
        },
        error => {
        console.log(" ERROR ");
          console.log(error);
        });
    }
  }

  ngOnInit(): void {}
}
