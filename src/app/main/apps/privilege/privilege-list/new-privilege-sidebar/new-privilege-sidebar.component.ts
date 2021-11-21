import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { UserEditService } from 'app/main/apps/user/user-edit/user-edit.service';

@Component({
  selector: 'app-new-privilege-sidebar',
  templateUrl: './new-privilege-sidebar.component.html'
})
export class NewPrivilegeSidebarComponent implements OnInit {
  public fullName;
  public firstName;
  public email;

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _roleEditService: UserEditService, private _coreSidebarService: CoreSidebarService) {}

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

  ngOnInit(): void {}
}
